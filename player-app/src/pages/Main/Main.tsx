import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { Box, styled } from '@mui/material';

import { NavMenu } from './NavMenu/NavMenu';
import { Sidebar } from './SIdebar/Sidebar';
import { Centerblock } from './Centerblock/Centerblock';
import { Player } from '../../components/Player/Player';
import { TEXT } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hook';
import { SongType } from '../../types';
import { fetchTracks } from '../../fetchers/fetchTracks';
import { uploadAllTracks } from '../../store/trackSlice';
import { getSortedByArtistsArray } from '../../utils/getSortedByArtistsArray';
import { getSortedByGenresArray } from '../../utils/getSortedByGenresArray';
import { getSortedByYearsArray } from '../../utils/getSortedByYearsArray';
import { getArtistsArray } from '../../utils/getArtistsArray';
import { getGenresArray } from '../../utils/getGenresArray';
import { getYearsArray } from '../../utils/getYearsArray';
import {
  updateSortedArtists,
  updateSortedGenres,
  updateSortedYears,
} from '../../store/sortedArraysSlice';

const cnMain = cn('Main');

export type MainProps = {
  header: string;
};

const Wrapper = styled(Box)`
  max-width: 100%;
`;

export const Main: FC<MainProps> = ({ header }) => {
  const dispatch = useAppDispatch();

  const currentTrack = useAppSelector((state) => state.tracks.currentTrack);
  const allTracks = useAppSelector((state) => state.tracks.allTracks);

  const [tracks, setTracks] = useState<SongType[]>(allTracks);

  const lang = useAppSelector((state) => state.language.lang);
  const bgColor = useAppSelector((state) => state.colorTheme.bgColor);

  useEffect(() => {
    if (allTracks.length) {
      setTracks(allTracks);
    } else {
      fetchTracks().then((data) => {
        setTracks(data);
        dispatch(uploadAllTracks(data));
        dispatch(
          updateSortedArtists(getArtistsArray(getSortedByArtistsArray(data))),
        );
        dispatch(updateSortedYears(getYearsArray(getSortedByYearsArray(data))));
        dispatch(
          updateSortedGenres(getGenresArray(getSortedByGenresArray(data))),
        );
      });
    }
  }, [allTracks, dispatch]);

  return (
    <Wrapper style={{ backgroundColor: bgColor }}>
      <Box
        sx={{
          display: 'flex',
          maxWidth: '1920px',
          minHeight: '100vh',
          margin: '0 auto',
        }}
        className={cnMain()}
      >
        <NavMenu />
        <Centerblock tracks={tracks} header={header}></Centerblock>
        <Sidebar
          isVisible={header === TEXT.header.tracks[lang]}
          isUserVisible={header !== TEXT.menu.profile[lang]}
        ></Sidebar>
      </Box>
      <Player track={currentTrack}></Player>
    </Wrapper>
  );
};
