import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { NavLink } from 'react-router-dom';
import {
  Box,
  Card,
  createTheme,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  ThemeProvider,
  Typography,
} from '@mui/material';

import { SpanChangeColor } from '../../../components/changeColor/SpanChangeColor/SpanChangeColor';
import { AlbumCover } from '../../../components/AlbumCover/AlbumCover';
import { text, USER } from '../../../constants';
import { useAppDispatch, useAppSelector } from '../../../hook';

import './Sidebar.css';
import {
  bgColorToBgColorLight,
  extradarkToDark,
  extradarkToHover,
} from '../../../utils/utils';
import { TLanguages } from '../../../types';
import { changeLanguage } from '../../../store/languageSlice';
// import './Animation.css';

const cnSidebar = cn('Sidebar');

export type SidebarProps = {
  isVisible: boolean;
  isUserVisible?: boolean;
};

export const Sidebar: FC<SidebarProps> = ({
  isVisible,
  isUserVisible = true,
}) => {
  const dispatch = useAppDispatch();

  const lang = useAppSelector((state) => state.language.lang);
  const textColor = useAppSelector((state) => state.colorTheme.textColor);
  const bgColor = useAppSelector((state) => state.colorTheme.bgColor);
  const decorativeColor = useAppSelector(
    (state) => state.colorTheme.decorativeColor,
  );
  const bgColorLight = bgColorToBgColorLight(bgColor);
  const colorHover = extradarkToHover(decorativeColor);
  const colorDark = extradarkToDark(decorativeColor);

  const [_, setLanguage] = React.useState(lang);

  const handleChange = (event: SelectChangeEvent) => {
    const newLanguage = event.target.value as TLanguages;
    setLanguage(newLanguage);
    dispatch(changeLanguage(newLanguage));
    localStorage.setItem('language', newLanguage);
  };

  const buttonTheme = createTheme({
    palette: {
      primary: {
        main: decorativeColor,
      },
    },
  });

  return (
    <Box className={cnSidebar()}>
      {isUserVisible && (
        <div className={cnSidebar('User')}>
          <NavLink to={'/profile'}>
            <Typography
              className={cnSidebar('User-Name')}
              style={{ color: textColor }}
            >
              <SpanChangeColor colorHover={colorHover} colorActive={colorDark}>
                {USER.name}
              </SpanChangeColor>
            </Typography>
          </NavLink>
          {/* <div className={cnSidebar('User-Avatar')}></div> */}

          <ThemeProvider theme={buttonTheme}>
            <FormControl
              variant="standard"
              sx={{
                marginLeft: '25px',
                width: '60px',
                backgroundColor: bgColorLight,
                borderTopLeftRadius: '5px',
                borderTopRightRadius: '5px',
              }}
            >
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={lang}
                onChange={handleChange}
                label="Language"
                style={{
                  color: textColor,
                  fontSize: '15px',
                  padding: '0 5px',
                }}
              >
                <MenuItem value={'ru'}>Ru</MenuItem>
                <MenuItem value={'en'}>En</MenuItem>
                <MenuItem value={'bel'}>Bel</MenuItem>
              </Select>
            </FormControl>
          </ThemeProvider>
        </div>
      )}

      <Card
        className={cnSidebar('List')}
        sx={
          isVisible
            ? { display: 'block', backgroundColor: 'transparent' }
            : { display: 'none' }
        }
        style={{ border: 'none', boxShadow: 'none' }}
      >
        {/* <canvas id="myCanvas" width="1200" height="250"></canvas> */}
        <NavLink to={'/dayplaylist'}>
          {/* <CardMedia
            component="img"
            className={cnSidebar('Button')}
            image="./playlist/playlist-day.png"
            alt="Playlist of the day"
          /> */}

          <AlbumCover text={text.albums.dayplaylist[lang]}></AlbumCover>
        </NavLink>
        <NavLink to={'/hits'}>
          {/* <CardMedia
            component="img"
            className={cnSidebar('Button')}
            image="./playlist/playlist-hits.png"
            alt="Playlist of hits"
          /> */}
          <AlbumCover text={text.albums.hits[lang]}></AlbumCover>
        </NavLink>
        {/* <NavLink to={'/indie'}>
          <CardMedia
            component="img"
            className={cnSidebar('Button')}
            image="./playlist/playlist-indie.png"
            alt="Indie charge"
          />
        </NavLink> */}
      </Card>
    </Box>
  );
};
