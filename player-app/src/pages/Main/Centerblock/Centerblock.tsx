import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';
import {
  Box,
  InputAdornment,
  SvgIcon,
  TextField,
  Typography,
} from '@mui/material';
import { Search, AccessTime } from '@mui/icons-material';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import {
  colorToSecondary,
  lightenDarkenColor,
} from '../../../utils/colorUtils';
import { SongType } from '../../../types';
import { TEXT } from '../../../constants';
import { Profile } from '../Profile/Profile';
import { useAppDispatch, useAppSelector } from '../../../hook';

import './Centerblock.css';

import { TrackList } from '../TrackList/TrackList';
import { SkeletonRect } from '../../../components/Skeleton/Skeleton';
import { FilterButtons } from '../../../components/FilterButtons/FilterButtons';
import { getSearchQueryArray } from '../../../utils/getSearchQueryArray';
import {
  updateFilteredTracks,
  updateSearchedTracks,
} from '../../../store/filteredItemsSlice';
import { getFinalItems } from '../../../utils/getFinalItems';
import { updateSearchQuery } from '../../../store/sortingSettingsSlice';

const cnCenterblock = cn('Centerblock');
const cnContent = cn('Content');

type PlayerProps = {
  tracks: SongType[];
  header: string;
};

export const Centerblock: FC<PlayerProps> = ({ header, tracks }) => {
  const dispatch = useAppDispatch();

  const lang = useAppSelector((state) => state.language.lang);
  const textColor = useAppSelector((state) => state.colorTheme.textColor);
  const skeletonColor = lightenDarkenColor(textColor, -10);
  const textColorSecondary = colorToSecondary(textColor);
  const order = useAppSelector((state) => state.sortingSettings.order);

  const allTracksStore = useAppSelector((state) => state.tracks.allTracks);
  const checkedItems = useAppSelector((state) => state.filteredItems);

  const array = new Array(10).fill(0);
  // const allTracks = filteredTracksStore.length
  //   ? filteredTracksStore
  //   : allTracksStore;

  const handleSearch = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const searchedItems = getSearchQueryArray(
      e.currentTarget.value,
      allTracksStore,
    );

    dispatch(updateSearchQuery(e.currentTarget.value));
    dispatch(updateSearchedTracks(searchedItems));

    const finalItems = getFinalItems(
      allTracksStore,
      checkedItems,
      searchedItems,
      order,
    );

    // console.log('--> searchedTracks', searchedTracks);
    // console.log('--> finalItems', finalItems);

    dispatch(updateFilteredTracks(finalItems));
  };

  if (header === TEXT.menu.profile[lang]) {
    return <Profile />;
  } else {
    return (
      <DndProvider backend={HTML5Backend}>
        <div className={cnCenterblock()}>
          <form className={cnCenterblock('Input-Wrapper')}>
            <TextField
              onChange={(e) => handleSearch(e)}
              InputLabelProps={{}}
              placeholder={TEXT.searchInput[lang]}
              fullWidth
              autoComplete="off"
              variant="standard"
              type={'search'}
              sx={{
                mt: '5px',
                input: { color: textColor },
                label: { color: textColor, pl: '30px' },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment sx={{ color: textColor }} position="start">
                    <Search style={{ color: textColor }} />
                  </InputAdornment>
                ),
              }}
            />
          </form>
          <Typography
            variant="h2"
            marginBottom={6}
            style={{ color: textColor }}
          >
            {header}
          </Typography>
          {header === TEXT.header.tracks[lang] && (
            <FilterButtons lang={lang} textColor={textColor}></FilterButtons>
          )}
          <Box className={cnCenterblock('Content')}>
            <div className={cnContent('Header')}>
              <span
                className={cnContent('Track')}
                style={{ color: textColorSecondary }}
              >
                {TEXT.listHeader.track[lang]}
              </span>
              <span
                className={cnContent('Singer')}
                style={{ color: textColorSecondary }}
              >
                {TEXT.listHeader.artist[lang]}
              </span>
              <span
                className={cnContent('Album')}
                style={{ color: textColorSecondary }}
              >
                {TEXT.listHeader.album[lang]}
              </span>
              <SvgIcon fontSize="small" sx={{ my: 'auto', ml: 'auto' }}>
                <AccessTime />
              </SvgIcon>
            </div>

            {!tracks.length ? (
              array.map((_, i) => (
                <div className={cnContent('Skeleton')} key={i.toString()}>
                  <SkeletonRect
                    width="4%"
                    margin="2%"
                    height="45px"
                    color={skeletonColor}
                  ></SkeletonRect>

                  <SkeletonRect
                    width="24%"
                    margin="5%"
                    color={skeletonColor}
                  ></SkeletonRect>

                  <SkeletonRect
                    width="20%"
                    margin="5%"
                    color={skeletonColor}
                  ></SkeletonRect>

                  <SkeletonRect
                    width="25%"
                    margin="6%"
                    color={skeletonColor}
                  ></SkeletonRect>

                  <SkeletonRect
                    width="9%"
                    margin="0"
                    color={skeletonColor}
                  ></SkeletonRect>
                </div>
              ))
            ) : (
              <TrackList></TrackList>
              // <TrackList allTracks={tracks}></TrackList>
            )}
          </Box>
        </div>
      </DndProvider>
    );
  }
};
