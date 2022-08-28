import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Button as MUIButton, createTheme, ThemeProvider } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import './Profile.css';

import { useAppDispatch, useAppSelector } from '../../../hook';
import { Typography } from '@mui/material';
import {
  BGCOLOR,
  COLOR,
  COLOR_EXTRADARK,
  text,
  USER,
} from '../../../constants';
import {
  changeBgColor,
  changeDecorativeColor,
  changeTextColor,
} from '../../../store/colorThemeSlice';
import { colorToSecondary } from '../../../utils/utils';
import { changeLanguage } from '../../../store/languageSlice';
import { TLanguages } from '../../../types';

const cnProfile = cn('Profile');

export const Profile: FC = () => {
  const dispatch = useAppDispatch();

  const lang = useAppSelector((state) => state.language.lang);
  const textColor = useAppSelector((state) => state.colorTheme.textColor);
  const bgColor = useAppSelector((state) => state.colorTheme.bgColor);
  const decorativeColor = useAppSelector(
    (state) => state.colorTheme.decorativeColor,
  );

  const textColorSecondary = colorToSecondary(textColor);

  const [_, setLanguage] = React.useState(lang);
  const [__, setBgColorInput] = React.useState(bgColor);
  const [___, setTextColorInput] = React.useState(textColor);
  const [____, setDecorativeColorInput] = React.useState(decorativeColor);

  const handleChange = (event: SelectChangeEvent) => {
    const newLanguage = event.target.value as TLanguages;
    setLanguage(newLanguage);
    dispatch(changeLanguage(newLanguage));
    localStorage.setItem('language', newLanguage);
  };

  const handleChangeBgColor = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    const newBgColor = event.target.value.toString();
    setBgColorInput(newBgColor);
    dispatch(changeBgColor(newBgColor));
    localStorage.setItem('bgColor', newBgColor);
  };

  const handleChangeTextColor = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    const newTextColor = event.target.value.toString();
    setTextColorInput(newTextColor);
    dispatch(changeTextColor(newTextColor));
    localStorage.setItem('textColor', newTextColor);
  };

  const handleChangeDecorativeColor = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    const newDecorativeColor = event.target.value.toString();
    setDecorativeColorInput(newDecorativeColor);
    dispatch(changeDecorativeColor(newDecorativeColor));
    localStorage.setItem('decorativeColor', newDecorativeColor);
  };

  const handleResetSettings = () => {
    dispatch(changeTextColor(COLOR));
    localStorage.setItem('textColor', COLOR);
    dispatch(changeBgColor(BGCOLOR));
    localStorage.setItem('bgColor', BGCOLOR);
    dispatch(changeDecorativeColor(COLOR_EXTRADARK));
    localStorage.setItem('decorativeColor', COLOR_EXTRADARK);
  };

  const buttonTheme = createTheme({
    palette: {
      primary: {
        main: decorativeColor,
      },
    },
  });

  return (
    <div className={cnProfile()}>
      <Typography
        variant="h2"
        marginTop={11}
        marginBottom={6}
        style={{ color: textColor }}
      >
        {text.menu.profile[lang]}
      </Typography>

      <div className={cnProfile('Data')} style={{ color: textColor }}>
        <h4
          className={cnProfile('Header')}
          style={{ color: textColorSecondary }}
        >
          {text.profile.userData[lang]}
        </h4>
        <div className={cnProfile('UserData')}>
          {text.profile.userName[lang]} {USER.name}
        </div>
        <div className={cnProfile('UserData')}>
          {text.profile.login[lang]} {USER.login}
        </div>

        <h4
          className={cnProfile('Header')}
          style={{ color: textColorSecondary }}
        >
          {text.profile.custom[lang]}
        </h4>
        <div className={cnProfile('Custom')}>
          <div className={cnProfile('CustomBgColor')}>
            <div>{text.profile.bgcolor[lang]}</div>
            <input
              className={cnProfile('InputBgColor')}
              type="color"
              value={bgColor}
              onChange={handleChangeBgColor}
            ></input>
          </div>
          <div className={cnProfile('CustomTextColor')}>
            <div>{text.profile.textColor[lang]}</div>
            <input
              className={cnProfile('InputTextColor')}
              type="color"
              value={textColor}
              onChange={handleChangeTextColor}
            ></input>
          </div>
          <div className={cnProfile('CustomDecorativeColor')}>
            <div>{text.profile.designColor[lang]}</div>
            <input
              className={cnProfile('InputDecorativeColor')}
              type="color"
              value={decorativeColor}
              onChange={handleChangeDecorativeColor}
            ></input>
          </div>
        </div>

        <ThemeProvider theme={buttonTheme}>
          <MUIButton
            color={'primary'}
            variant={'contained'}
            sx={{
              width: '200px',
              height: '52px',
              padding: '10px 15px',
              mb: 2.5,
              mt: 1.5,
              fontSize: '16px',
              textTransform: 'none',
              color: textColor,
            }}
            onClick={handleResetSettings}
          >
            {text.profile.buttonText[lang]}
          </MUIButton>
          <FormControl
            variant="standard"
            sx={{ m: 1, width: 110, margin: 0, marginTop: 3 }}
          >
            <InputLabel
              id="demo-simple-select-standard-label"
              style={{
                color: textColorSecondary,
                fontWeight: 'bold',
                fontSize: '20px',
                fontFamily: 'inherit',
              }}
            >
              {text.profile.language[lang]}
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={lang}
              onChange={handleChange}
              label="Language"
              style={{ color: textColor }}
            >
              <MenuItem value={'ru'}>Русский</MenuItem>
              <MenuItem value={'en'}>English</MenuItem>
              <MenuItem value={'bel'}>Беларускі</MenuItem>
            </Select>
          </FormControl>
        </ThemeProvider>
      </div>
    </div>
  );
};
