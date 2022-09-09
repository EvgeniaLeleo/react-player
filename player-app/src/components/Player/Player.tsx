import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { TSong } from '../../types';
import {
  PlayArrow,
  Pause,
  VolumeUp,
  VolumeOff,
  FavoriteBorder,
  Shuffle,
  Favorite,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hook';
import {
  addTrackToFavourites,
  removeTrackFromFavourites,
  setAutoplayStatus,
  setShuffleStatus,
  shuffleTracks,
  switchToNextTrack,
  switchToPreviousTrack,
} from '../../store/trackSlice';
import { extradarkToHover } from '../../utils/colorUtils';
import {
  PlayerControlsWrapper,
  PlayerWrapper,
} from '../changeColor/PlayerChangeColor';

import './Player.css';

const cnPlayer = cn('Player');

export type PlayerProps = {
  track: TSong;
};

export const Player: FC<PlayerProps> = ({ track }) => {
  const dispatch = useAppDispatch();
  const [audio, setAudio] = useState(
    JSON.parse(localStorage.getItem('currentTrack')!)?.track_file || '',
  );
  const isActive = useAppSelector((state) => state.tracks.isShuffleActive);
  const currentTrack = useAppSelector((state) => state.tracks.currentTrack);
  const favourites = useAppSelector((state) => state.tracks.favourites);

  const autoplay = useAppSelector((state) => state.tracks.autoplay);
  const alltracks = useAppSelector((state) => state.tracks.allTracks);
  const decorativeColor = useAppSelector(
    (state) => state.colorTheme.decorativeColor,
  );
  const progressColor = extradarkToHover(decorativeColor);
  let audioCtx: any = useRef();

  useEffect(() => {
    setAudio(currentTrack.track_file);
  }, [currentTrack.track_file]);

  const handleClickNext = useCallback(() => {
    dispatch(switchToNextTrack(alltracks));
  }, [dispatch, alltracks]);

  const handleClickPrevious = useCallback(() => {
    dispatch(switchToPreviousTrack(alltracks));
  }, [dispatch, alltracks]);

  const handleAudioEnded = useCallback(() => {
    dispatch(shuffleTracks(isActive));
    dispatch(switchToNextTrack(alltracks));
  }, [dispatch, alltracks, isActive]);

  const handleClickShuffle = useCallback(() => {
    dispatch(setShuffleStatus(isActive));
  }, [dispatch, isActive]);

  const handleClickOnPause = useCallback(() => {
    dispatch(setAutoplayStatus(false));
  }, [dispatch]);

  const handleClickOnPlay = useCallback(() => {
    dispatch(setAutoplayStatus(true));
  }, [dispatch]);

  const handleAddToFavourites = useCallback(
    (song: TSong) => {
      if (
        favourites.some(
          (favTrack: TSong) => favTrack.track_file === song.track_file,
        )
      ) {
        dispatch(removeTrackFromFavourites(song));
      } else {
        dispatch(addTrackToFavourites(song));
      }
    },
    [dispatch, favourites],
  );

  const checkFavouriteTrack = (song: TSong) => {
    if (
      favourites.some(
        (favTrack: TSong) => favTrack.track_file === song.track_file,
      )
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <PlayerWrapper progressсolor={progressColor} className={cnPlayer()}>
      <AudioPlayer
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrevious}
        onEnded={handleAudioEnded}
        src={audio}
        autoPlay={autoplay}
        onPlay={handleClickOnPlay}
        onPause={handleClickOnPause}
        defaultDuration={false}
        defaultCurrentTime={false}
        ref={audioCtx}
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
              <img
                // src={track.img ? track.img : './icons/note.svg'}
                src={'./icons/note.svg'}
                alt="note"
                width={'52px'}
              ></img>
              <div>
                <p>{track.name}</p>
                <p>{track.author}</p>
              </div>
            </div>
            <IconButton onClick={() => handleAddToFavourites(track)}>
              {checkFavouriteTrack(track) ? (
                <Favorite className={cnPlayer('ControlsIcon')} />
              ) : (
                <FavoriteBorder className={cnPlayer('ControlsIcon')} />
              )}
            </IconButton>
          </PlayerControlsWrapper>,
          RHAP_UI.VOLUME_CONTROLS,
        ]}
        customAdditionalControls={[
          RHAP_UI.LOOP,
          <IconButton
            onClick={handleClickShuffle}
            color="secondary"
            sx={{ svg: { fontSize: '26px' }, padding: 0 }}
          >
            <Shuffle
              sx={{ color: isActive ? 'white' : '#acacac' }}
              className={cnPlayer('ControlsIcon')}
            />
          </IconButton>,
        ]}
        showSkipControls={true}
        showJumpControls={false}
      />
    </PlayerWrapper>
  );
};
