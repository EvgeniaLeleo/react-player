import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import { NavMenu } from './NavMenu/NavMenu';
import { Sidebar } from './SIdebar/Sidebar';
import { Centerblock } from './Centerblock/Centerblock';

import './Main.css';
import { Player } from '../../components/Player/Player';
import { text, TRACK, TRACKS, lang } from '../../constants';
import { Box, styled } from '@mui/material';
import { useAppSelector } from '../../hook';

const cnMain = cn('Main');

export type MainProps = {
  header: string;
};

const Wrapper = styled(Box)`
  max-width: 100%;
`;

export const Main: FC<MainProps> = ({ header }) => {
  const bgColor = useAppSelector((state) => state.colorTheme.bgColor);

  return (
    <Wrapper style={{ backgroundColor: bgColor }} className={cnMain('Wrapper')}>
      <Box sx={{ display: 'flex' }} className={cnMain()}>
        <NavMenu />
        <Centerblock tracks={TRACKS} header={header}></Centerblock>
        <Sidebar
          isVisible={header === text.header.tracks[lang]}
          isUserVisible={header !== text.menu.profile[lang]}
        ></Sidebar>
        <Player track={TRACK}></Player>
      </Box>
    </Wrapper>
  );
};
