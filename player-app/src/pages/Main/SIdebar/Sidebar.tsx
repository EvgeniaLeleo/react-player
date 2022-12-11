import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { NavLink } from 'react-router-dom';
import {
  Button,
  createTheme,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  ThemeProvider,
  Typography,
} from '@mui/material';

import { SpanChangeColor } from '../../../components/changeColor/SpanChangeColor';
import { AlbumCover } from '../../../components/AlbumCover/AlbumCover';
import {
  ALBUM_DANCE,
  ALBUM_DAYPLAYLIST,
  ALBUM_INDIE,
  TEXT,
} from '../../../constants';
import { useAppDispatch, useAppSelector } from '../../../hook';
import {
  bgColorToBgColorLight,
  extradarkToDark,
  extradarkToHover,
} from '../../../utils/colorUtils';
import { TSong, TCheckedItems, TLanguages } from '../../../types';
import { changeLanguage } from '../../../store/languageSlice';
import {
  updateCheckedArtists,
  updateCheckedGenres,
  updateCheckedYears,
  updateFilteredDanceTracks,
  updateFilteredFavouritesTracks,
  updateFilteredRandomTracks,
  updateFilteredTracks,
  updateSearchedTracks,
  updateSearchedTracksDance,
  updateSearchedTracksFavourites,
  updateSearchedTracksRandom,
} from '../../../store/filteredItemsSlice';
import { getFinalItems } from '../../../utils/getFinalItems';
import {
  uploadDanceTracks,
  uploadRandomTracks,
} from '../../../store/trackSlice';
import { updateSearchQuery } from '../../../store/sortingSettingsSlice';

import './Sidebar.css';

const cnSidebar = cn('Sidebar');

type SidebarProps = {
  isVisible: boolean;
  isUserVisible?: boolean;
};

export const Sidebar: FC<SidebarProps> = ({
  isVisible,
  isUserVisible = true,
}) => {
  const dispatch = useAppDispatch();

  const dataUser = useAppSelector((state) => state.auth.data);
  // const dataUser = { fullName: 'Evgenia Leleo' };

  const lang = useAppSelector((state) => state.language.lang);
  const textColor = useAppSelector((state) => state.colorTheme.textColor);
  const bgColor = useAppSelector((state) => state.colorTheme.bgColor);
  const decorativeColor = useAppSelector(
    (state) => state.colorTheme.decorativeColor,
  );
  const bgColorLight = bgColorToBgColorLight(bgColor);
  const colorHover = extradarkToHover(decorativeColor);
  const colorDark = extradarkToDark(decorativeColor);

  const handleChange = (event: SelectChangeEvent) => {
    const newLanguage = event.target.value as TLanguages;
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

  const allTracks: TSong[] = useAppSelector((state) => state.tracks.allTracks);
  const allTracksDance: TSong[] = useAppSelector(
    (state) => state.tracks.danceTracks,
  );
  const allTracksRandom: TSong[] = useAppSelector(
    (state) => state.tracks.randomTracks,
  );
  const allTracksFavourites = useAppSelector(
    (state) => state.tracks.favourites,
  );

  const order = useAppSelector((state) => state.sortingSettings.order);

  const handleClickDance = () => {
    const newFilter: TCheckedItems = {
      checkedArtists: [],
      checkedYears: [],
      checkedGenres: [],
    };
    const searchedItemsCurrent = allTracksDance;

    newFilter.checkedGenres = [ALBUM_DANCE];

    dispatch(updateCheckedGenres([ALBUM_DANCE]));
    dispatch(updateCheckedArtists([]));
    dispatch(updateCheckedYears([]));

    dispatch(updateFilteredTracks([]));
    dispatch(updateFilteredDanceTracks([]));
    dispatch(updateFilteredRandomTracks([]));
    dispatch(updateFilteredFavouritesTracks([]));

    dispatch(updateSearchQuery(''));
    dispatch(updateSearchedTracks(allTracks));
    dispatch(updateSearchedTracksDance(allTracksDance));
    dispatch(updateSearchedTracksRandom(allTracksRandom));
    dispatch(updateSearchedTracksFavourites(allTracksFavourites));

    const finalFilteredTracks = getFinalItems(
      allTracksDance,
      newFilter,
      searchedItemsCurrent,
      order,
    );

    dispatch(uploadDanceTracks(finalFilteredTracks));
  };

  const handleClickRandom = () => {
    const searchedItemsCurrent = allTracksRandom;
    const newFilter: TCheckedItems = {
      checkedArtists: [],
      checkedYears: [],
      checkedGenres: [],
    };

    dispatch(updateCheckedGenres([]));
    dispatch(updateCheckedArtists([]));
    dispatch(updateCheckedYears([]));

    dispatch(updateFilteredTracks([]));
    dispatch(updateFilteredDanceTracks([]));
    dispatch(updateFilteredRandomTracks([]));
    dispatch(updateFilteredFavouritesTracks([]));

    dispatch(updateSearchQuery(''));
    dispatch(updateSearchedTracks(allTracks));
    dispatch(updateSearchedTracksDance(allTracksDance));
    dispatch(updateSearchedTracksRandom(allTracksRandom));
    dispatch(updateSearchedTracksFavourites(allTracksFavourites));

    const finalFilteredTracks = getFinalItems(
      allTracksRandom,
      newFilter,
      searchedItemsCurrent,
      order,
    );

    dispatch(uploadRandomTracks(finalFilteredTracks));
  };

  const [isAlbumsVisible, setIsAlbumsVisible] = useState(false);

  const handleAlbumList = () => {
    setIsAlbumsVisible(!isAlbumsVisible);
  };

  useEffect(() => {
    return () => setIsAlbumsVisible(false);
  }, []);

  return (
    <div className={cnSidebar()}>
      {isUserVisible && (
        <div className={cnSidebar('User')}>
          <NavLink to={'/profile'}>
            <Typography
              className={cnSidebar('User-Name')}
              style={{ color: textColor }}
            >
              <SpanChangeColor colorHover={colorHover} colorActive={colorDark}>
                {dataUser?.fullName}
              </SpanChangeColor>
            </Typography>
          </NavLink>

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

      {isUserVisible && (
        <div style={{ backgroundColor: 'transparent' }}>
          <div className={cnSidebar('List')}>
            <NavLink to={'/random'} onClick={handleClickRandom}>
              <AlbumCover
                text={TEXT.albums[ALBUM_DAYPLAYLIST][lang]}
              ></AlbumCover>
            </NavLink>

            <NavLink to={'/dance'} onClick={handleClickDance}>
              <AlbumCover text={TEXT.albums[ALBUM_DANCE][lang]}></AlbumCover>
            </NavLink>

            <NavLink to={'/dance'} onClick={handleClickDance}>
              <AlbumCover text={TEXT.albums[ALBUM_INDIE][lang]}></AlbumCover>
            </NavLink>
          </div>

          <ThemeProvider theme={buttonTheme}>
            <div className={cnSidebar('Button-Visibility')}>
              <Button
                onClick={handleAlbumList}
                color="primary"
                variant="contained"
                sx={{
                  textTransform: 'none',
                  color: textColor,
                  width: '100%',
                  minHeight: '30px',
                  marginBottom: '13px',
                  marginTop: '10px',
                  padding: '10px',
                }}
                className={cnSidebar('Button-Mobile-List')}
              >
                {TEXT.collections[lang]}
              </Button>
            </div>
          </ThemeProvider>

          {isAlbumsVisible && (
            <div className={cnSidebar('Mobile-List')}>
              <div>
                <NavLink to={'/random'} onClick={handleClickRandom}>
                  <AlbumCover
                    text={TEXT.albums[ALBUM_DAYPLAYLIST][lang]}
                  ></AlbumCover>
                </NavLink>

                <NavLink to={'/dance'} onClick={handleClickDance}>
                  <AlbumCover
                    text={TEXT.albums[ALBUM_DANCE][lang]}
                  ></AlbumCover>
                </NavLink>

                <NavLink to={'/dance'} onClick={handleClickDance}>
                  <AlbumCover
                    text={TEXT.albums[ALBUM_INDIE][lang]}
                  ></AlbumCover>
                </NavLink>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
