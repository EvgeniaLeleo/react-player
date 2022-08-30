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

import { FilterButton } from '../../../components/FilterButton/FilterButton';
import { colorToSecondary, lightenDarkenColor } from '../../../utils/utils';
import { SongType } from '../../../types';
import {
  filterItems1,
  filterItems2,
  filterItems3,
  text,
} from '../../../constants';
import { Profile } from '../Profile/Profile';
import { useAppSelector } from '../../../hook';

import './Centerblock.css';

import { TrackList } from '../TrackList/TrackList';
import { SkeletonRect } from '../../../components/Skeleton/Skeleton';

const cnCenterblock = cn('Centerblock');
const cnContent = cn('Content');

type PlayerProps = {
  tracks: SongType[];
  header: string;
};

export const Centerblock: FC<PlayerProps> = ({ header, tracks }) => {
  const lang = useAppSelector((state) => state.language.lang);
  const textColor = useAppSelector((state) => state.colorTheme.textColor);
  const skeletonColor = lightenDarkenColor(textColor, -10);
  const textColorSecondary = colorToSecondary(textColor);

  const array = new Array(10).fill(0);

  if (header === text.menu.profile[lang]) {
    return <Profile />;
  } else {
    return (
      <DndProvider backend={HTML5Backend}>
        <div className={cnCenterblock()}>
          <form className={cnCenterblock('Input-Wrapper')}>
            <TextField
              InputLabelProps={{}}
              placeholder={text.searchInput[lang]}
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
          {header === text.header.tracks[lang] && (
            <Box
              className={cnCenterblock('Filters')}
              style={{ color: textColor }}
            >
              <span className={cnCenterblock('Filters-Text')}>
                {text.search.searchBy[lang]}
              </span>
              <FilterButton
                buttonText={text.search.artist[lang]}
                checkItems={filterItems1}
              ></FilterButton>
              <FilterButton
                buttonText={text.search.release[lang]}
                checkItems={filterItems2}
              ></FilterButton>
              <FilterButton
                buttonText={text.search.genre[lang]}
                checkItems={filterItems3}
              ></FilterButton>
            </Box>
          )}
          <Box className={cnCenterblock('Content')}>
            <div className={cnContent('Header')}>
              <span
                className={cnContent('Track')}
                style={{ color: textColorSecondary }}
              >
                {text.listHeader.track[lang]}
              </span>
              <span
                className={cnContent('Singer')}
                style={{ color: textColorSecondary }}
              >
                {text.listHeader.artist[lang]}
              </span>
              <span
                className={cnContent('Album')}
                style={{ color: textColorSecondary }}
              >
                {text.listHeader.album[lang]}
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
              <TrackList allTracks={tracks}></TrackList>
            )}
          </Box>
        </div>
      </DndProvider>
    );
  }
};
