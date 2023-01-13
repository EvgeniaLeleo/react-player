import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FC } from 'react'
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'

import { Track } from '../../types'
import 'react-h5-audio-player/lib/styles.css'
import {
  PlayArrow,
  Pause,
  VolumeUp,
  VolumeOff,
  FavoriteBorder,
  Shuffle,
  Favorite,
} from '@mui/icons-material'
import { IconButton } from '@mui/material'
import {
  addFavoriteTrack,
  removeFavoriteTrack,
  // addTrackToFavourites,
  // removeTrackFromFavourites,
  setAutoplayStatus,
  setShuffleStatus,
  shuffleTracks,
  switchToNextTrack,
  switchToPreviousTrack,
} from '../../store/trackSlice'
import { colorToSecondary, extradarkToHover } from '../../utils/colorUtils'
import {
  PlayerControlsWrapper,
  PlayerWrapper,
} from '../changeColor/PlayerChangeColor'

import './Player.css'
import { useAppDispatch, useAppSelector } from '../../hooks/hook'
import { useFavoriteTrack } from '../../hooks/useFavoriteTrack'

export type Props = {
  currentTrack?: Track
  tracks?: Track[]
}

export type PlayerProps = {
  currentTrack: Track
}

export const Player: FC<Props> = ({ currentTrack, tracks }) => {
  const dispatch = useAppDispatch()
  const [audio, setAudio] = useState(
    JSON.parse(localStorage.getItem('currentTrack')!)?.url || ''
  )

  const isActive = useAppSelector((state) => state.tracks.isShuffleActive)
  // const currentTrack = useAppSelector((state) => state.tracks.currentTrack)

  const autoplay = useAppSelector((state) => state.tracks.autoplay)
  const decorativeColor = useAppSelector(
    (state) => state.colorTheme.decorativeColor
  )
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

  const { favorite, toggleFavoriteTrack } = useFavoriteTrack(currentTrack)
  const textColor = useAppSelector((state) => state.colorTheme.textColor)
  const textColorSecondary = colorToSecondary(textColor)

  // useEffect(() => {}, [favorite])
  const favoriteTracks = useAppSelector((state) => state.tracks.favoriteTracks)

  return (
    <PlayerWrapper progressсolor={progressColor} className="Player">
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
            <IconButton
              onClick={
                () => {
                  // if (currentTrack) {
                  // toggleFavoriteTrack(currentTrack.id)
                  // }
                  toggleFavoriteTrack(currentTrack?.id || 0)
                }
                // (e) => {
                // if (currentTrack && favoriteTracks.includes(currentTrack.id)) {
                //   dispatch(removeFavoriteTrack(currentTrack.id))
                //   console.log(currentTrack.id)
                // } else if (currentTrack) {
                //   dispatch(addFavoriteTrack(currentTrack.id))
                //   console.log(currentTrack.id)
                // }}
              }
              sx={{ width: '5%' }}
              style={{
                color: favorite ? 'rgb(223 82 82)' : textColorSecondary,
              }}
            >
              {favorite ? (
                <Favorite fontSize="small" />
              ) : (
                <FavoriteBorder fontSize="small" />
              )}
            </IconButton>
            {/* <IconButton
              onClick={(e) => {
                e.stopPropagation()
                toggleFavoriteTrack(currentTrack?.id || 0)
              }}
              style={{
                color: favorite ? 'rgb(223 82 82)' : textColorSecondary,
              }}
            >
              {favorite ? (
                <Favorite className="ControlsIcon" />
              ) : (
                <FavoriteBorder className="ControlsIcon" />
              )}
            </IconButton> */}
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
