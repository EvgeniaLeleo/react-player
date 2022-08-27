import React, { useEffect, useRef } from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './Player.css';
import { TTrack } from '../../types';
import {
  PlayArrow,
  Pause,
  VolumeUp,
  VolumeOff,
  FavoriteBorder,
  Shuffle,
} from '@mui/icons-material';
import { styled } from '@mui/system';
import { Box, IconButton } from '@mui/material';
const cnPlayer = cn('Player');

export type PlayerProps = {
  track: TTrack;
};

const PlayerControlsWrapper = styled('div')`
  display: flex;
  align-items: center;
  gap: 25px;
  .css-78trlr-MuiButtonBase-root-MuiIconButton-root {
    color: rgb(255 2 2 / 55%);
  }
`;

export const Player: FC<PlayerProps> = ({ track }) => {
  // const ref = useRef(null);

  // useEffect(() => {
  //   animation(ref.current);
  // }, []);

  return (
    <Box className={cnPlayer()}>
      <AudioPlayer
        // ref={ref}
        src={
          'https://docs.google.com/uc?export=open&id=1r4N5SBd-6C-zECrMge8UKlknBh9p1d4g'
          // 'http://51.250.72.80:8090/django_media/music_files/Alexander_Nakarada_-_Carol_Of_The_Bells.mp3'
        }
        defaultDuration={false}
        defaultCurrentTime={false}
        customIcons={{
          play: (
            <PlayArrow fontSize="large" className={cnPlayer('ControlsIcon')} />
          ),
          pause: (
            <Pause fontSize="large" className={cnPlayer('ControlsIcon')} />
          ),
          volume: <VolumeUp className={cnPlayer('ControlsIcon')} />,
          volumeMute: <VolumeOff className={cnPlayer('ControlsIcon')} />,
        }}
        customControlsSection={[
          RHAP_UI.MAIN_CONTROLS,
          RHAP_UI.ADDITIONAL_CONTROLS,
          <PlayerControlsWrapper>
            <div className={cnPlayer('TrackInfo')}>
              <img src="./icons/note.svg" alt="note"></img>
              <div>
                <p>{track.name}</p>
                <p>{track.author}</p>
              </div>
            </div>
            <IconButton>
              <FavoriteBorder className={cnPlayer('ControlsIcon')} />
            </IconButton>
          </PlayerControlsWrapper>,
          RHAP_UI.VOLUME_CONTROLS,
        ]}
        customAdditionalControls={[
          RHAP_UI.LOOP,
          <IconButton sx={{ svg: { fontSize: '26px' }, padding: 0 }}>
            <Shuffle className={cnPlayer('ControlsIcon')} />
          </IconButton>,
        ]}
        showSkipControls={true}
        showJumpControls={false}
      />
    </Box>
  );
};
