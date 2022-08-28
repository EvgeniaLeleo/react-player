import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './Player.css';
import { SongType, TTrack } from '../../types';
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
import { useAppSelector } from '../../hook';
const cnPlayer = cn('Player');

export type PlayerProps = {
  track: SongType;
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
  const [audio, setAudio] = useState(
    JSON.parse(localStorage.getItem("currentTrack")!)?.url || ""
  );
  const currentTrack = useAppSelector((state) => state.tracks.currentTrack);

  useEffect(() => {
    setAudio(currentTrack.urlPlay);
  }, [currentTrack.urlPlay]);

  return (
    <Box className={cnPlayer()}>
      <AudioPlayer
        src={audio}
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
                <p>{track.title}</p>
                <p>{track.artist}</p>
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
