import React, { useCallback, useEffect, useState } from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './Player.css';
import { SongType } from '../../types';
import {
  PlayArrow,
  Pause,
  VolumeUp,
  VolumeOff,
  FavoriteBorder,
  Shuffle,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hook';
import { shuffleTracks, switchToNextTrack, switchToPreviousTrack } from '../../store/trackSlice';
import { extradarkToHover } from '../../utils/utils';
import { PlayerControlsWrapper, PlayerWrapper } from '../changeColor/PlayerChangeColor/PlayerChangeColor';
const cnPlayer = cn('Player');

export type PlayerProps = {
  track: SongType;
};

export const Player: FC<PlayerProps> = ({ track }) => {
  const dispatch = useAppDispatch();
  const [audio, setAudio] = useState(
    JSON.parse(localStorage.getItem("currentTrack")!)?.url || ""
  );
  const [isActive, setIsActive] = useState(false);
  const currentTrack = useAppSelector((state) => state.tracks.currentTrack);
  const alltracks = useAppSelector((state) => state.tracks.allTracks);
  const decorativeColor = useAppSelector(
    (state) => state.colorTheme.decorativeColor,
  );
  const progressColor = extradarkToHover(decorativeColor);

  useEffect(() => {
    setAudio(currentTrack.urlPlay);
  }, [currentTrack.urlPlay]);

  const handleClickNext = useCallback(() => {
    dispatch(switchToNextTrack(alltracks))
  }, [dispatch, alltracks]);

  const handleClickPrevious = useCallback(() => {
    dispatch(switchToPreviousTrack(alltracks))
  }, [dispatch, alltracks]);

  const handleAudioEnded = useCallback(() => {
    dispatch(shuffleTracks(isActive));
    dispatch(switchToNextTrack(alltracks));
  }, [dispatch, alltracks, isActive]);

  const handleClickShuffle = useCallback(() => {
    setIsActive(!isActive);
  },[isActive]);



  return (
    <PlayerWrapper progressсolor={progressColor} className={cnPlayer()}>
      <AudioPlayer
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrevious}
        onEnded={handleAudioEnded}
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
              <img src={track.img ? track.img : "./icons/note.svg"} alt="note" width={'52px'}></img>
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
          <IconButton onClick={handleClickShuffle} color='secondary' sx={{ svg: { fontSize: '26px' }, padding: 0 }}>
            <Shuffle sx={{color: isActive ? "white" : "#acacac"}} className={cnPlayer('ControlsIcon')} />
          </IconButton>,
        ]}
        showSkipControls={true}
        showJumpControls={false}
      />
    </PlayerWrapper>
  );
};
