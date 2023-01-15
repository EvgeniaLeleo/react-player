import { useCallback, useEffect, useRef, useState } from 'react'
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import {
  PlayArrow,
  Pause,
  VolumeUp,
  VolumeOff,
  Shuffle,
} from '@mui/icons-material'
import { IconButton } from '@mui/material'

import {
  setAutoplayStatus,
  setShuffleStatus,
  shuffleTracks,
  switchToNextTrack,
  switchToPreviousTrack,
} from '../../store/trackSlice'
import { extradarkToHover } from '../../utils/colorUtils'
import {
  PlayerControlsWrapper,
  PlayerWrapper,
} from '../ChangeColorComponents/PlayerChangeColor'
import { useAppDispatch, useAppSelector } from '../../hooks/hook'

import 'react-h5-audio-player/lib/styles.css'
import './Player.css'

export const Player = () => {
  const dispatch = useAppDispatch()

  const currentTrack = useAppSelector((state) => state.tracks.currentTrack)
  const tracks = useAppSelector((state) => state.tracks.movedTracks)
  const isActive = useAppSelector((state) => state.tracks.isShuffleActive)
  const autoplay = useAppSelector((state) => state.tracks.autoplay)
  const isVisible = useAppSelector((state) => state.player.isVisible)

  const decorativeColor = useAppSelector(
    (state) => state.colorTheme.decorativeColor
  )

  const [audio, setAudio] = useState(currentTrack?.track_file)

  const progressColor = extradarkToHover(decorativeColor)
  let audioCtx: any = useRef()

  useEffect(() => {
    setAudio(currentTrack?.track_file)
  }, [currentTrack?.track_file])

  const handleClickNext = useCallback(() => {
    if (tracks) {
      dispatch(switchToNextTrack(tracks))
    }
  }, [dispatch, tracks])

  const handleClickPrevious = useCallback(() => {
    if (tracks) {
      dispatch(switchToPreviousTrack(tracks))
    }
  }, [dispatch, tracks])

  const handleAudioEnded = useCallback(() => {
    dispatch(shuffleTracks(isActive))
    if (tracks) {
      dispatch(switchToNextTrack(tracks))
    }
  }, [dispatch, tracks, isActive])

  const handleClickShuffle = useCallback(() => {
    dispatch(setShuffleStatus(isActive))
  }, [dispatch, isActive])

  const handleClickOnPause = useCallback(() => {
    dispatch(setAutoplayStatus(false))
  }, [dispatch])

  const handleClickOnPlay = useCallback(() => {
    dispatch(setAutoplayStatus(true))
  }, [dispatch])

  console.log(isVisible)

  return (
    <PlayerWrapper
      progressсolor={progressColor}
      className="Player"
      style={
        isVisible
          ? { transform: 'translateY(0)' }
          : { transform: 'translateY(100%)' }
      }
    >
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
        // autoPlayAfterSrcChange={false}
        ref={audioCtx}
        customIcons={{
          play: <PlayArrow fontSize="large" className="ControlsIcon" />,
          pause: <Pause fontSize="large" className="ControlsIcon" />,
          volume: <VolumeUp className="ControlsIcon" />,
          volumeMute: <VolumeOff className="ControlsIcon" />,
        }}
        customControlsSection={[
          RHAP_UI.MAIN_CONTROLS,
          RHAP_UI.ADDITIONAL_CONTROLS,
          <PlayerControlsWrapper>
            <div className="TrackInfo">
              <img
                src={
                  currentTrack?.logo
                    ? currentTrack.logo
                    : '/assets/icons/note.svg'
                }
                alt="note"
                width={'52px'}
              />
              <div>
                <p>{currentTrack?.name}</p>
                <p>{currentTrack?.author}</p>
              </div>
            </div>
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
              className="ControlsIcon"
            />
          </IconButton>,
        ]}
        showSkipControls={true}
        showJumpControls={false}
      />
    </PlayerWrapper>
  )
}
