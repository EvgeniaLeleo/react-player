import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './Centerblock.css';
import { FilterButton } from '../../../components/FilterButton/FilterButton';
import { TLanguages, TTrack } from '../../../types';
import { lightenDarkenColor, secondsToHms } from '../../../utils/utils';
import {
  Box,
  IconButton,
  InputAdornment,
  SvgIcon,
  TextField,
  Typography,
} from '@mui/material';
import { Search, AccessTime, FavoriteBorder } from '@mui/icons-material';
import { text } from '../../../constants';
import { Profile } from '../Profile/Profile';
import { useAppSelector } from '../../../hook';

const cnCenterblock = cn('Centerblock');
const cnContent = cn('Content');

export type PlayerProps = {
  tracks: TTrack[];
  header: string;
};

export const Centerblock: FC<PlayerProps> = ({ header, tracks }) => {
  const lang = useAppSelector((state) => state.language.lang);

  const textColor = useAppSelector((state) => state.colorTheme.textColor);
  const textColorSecondary = lightenDarkenColor(textColor, -120);

  if (header === text.menu.profile[lang]) {
    return <Profile />;
  } else {
    return (
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
        <Typography variant="h2" marginBottom={6} style={{ color: textColor }}>
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
            <FilterButton buttonText={text.search.artist[lang]}></FilterButton>
            <FilterButton buttonText={text.search.release[lang]}></FilterButton>
            <FilterButton buttonText={text.search.genre[lang]}></FilterButton>
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

          {tracks.map((track) => (
            <div
              className={cnContent('Track-Info')}
              style={{ color: textColor }}
              key={track.name + track.author + track.album}
            >
              <img
                className={cnContent('Track-Icon')}
                style={{ color: textColorSecondary }}
                src="./icons/note.svg"
                alt="note"
              ></img>
              <span className={cnContent('Track-Name')}>{track.name}</span>
              <span className={cnContent('Track-Author')}>{track.author}</span>
              <span
                className={cnContent('Track-Album')}
                style={{ color: textColorSecondary }}
              >
                {track.album}
              </span>
              <IconButton
                sx={{ width: '5%' }}
                style={{ color: textColorSecondary }}
              >
                <FavoriteBorder fontSize="small" />
              </IconButton>
              <span
                className={cnContent('Track-Duration')}
                style={{ color: textColorSecondary }}
              >
                {secondsToHms(track.duration_in_seconds)}
              </span>
            </div>
          ))}
        </Box>
      </div>
    );
  }
};
