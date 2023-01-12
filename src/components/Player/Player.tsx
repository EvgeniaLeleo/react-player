// import React, { useCallback, useEffect, useRef, useState } from 'react'
// import { FC } from 'react'
// import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
// import 'react-h5-audio-player/lib/styles.css'
// import {
//   PlayArrow,
//   Pause,
//   VolumeUp,
//   VolumeOff,
//   Shuffle,
// } from '@mui/icons-material'
// import { IconButton } from '@mui/material'

// import { extradarkToHover } from '../../utils/colorUtils'
// import {
//   PlayerControlsWrapper,
//   PlayerWrapper,
// } from '../changeColor/PlayerChangeColor'

// import './Player.css'
// import { useAppDispatch, useAppSelector } from '../../hooks/hook'
import { Track } from '../../types'

// export const Player: FC<PlayerProps> = ({ currentTrack, tracks }) => {
//   //TODO? const currentTrack = useAppSelector((state) => state.tracks.currentTrack)

//   const dispatch = useAppDispatch()

//   const [audio, setAudio] = useState(
//     JSON.parse(localStorage.getItem('currentTrack')!)?.url || ''
//   )
//   const isActive = useAppSelector((state) => state.tracks.isShuffleActive)
//   // console.log('currentTrack', currentTrack?.track_file)
//   // const favourites = useAppSelector((state) => state.tracks.favourites)

//   const autoplay = useAppSelector((state) => state.tracks.autoplay)
//   const decorativeColor = useAppSelector(
//     (state) => state.colorTheme.decorativeColor
//   )
//   const progressColor = extradarkToHover(decorativeColor)
//   let audioCtx: any = useRef()

//   useEffect(() => {
//     setAudio(currentTrack?.track_file)
//   }, [currentTrack?.track_file])

//   const handleClickNext = useCallback(() => {
//     if (tracks) {
//       dispatch(switchToNextTrack(tracks))
//     }
//   }, [dispatch, tracks])

//   const handleClickPrevious = useCallback(() => {
//     if (tracks) {
//       dispatch(switchToPreviousTrack(tracks))
//     }
//   }, [dispatch, tracks])

//   const handleAudioEnded = useCallback(() => {
//     dispatch(shuffleTracks(isActive))
//     if (tracks) {
//       dispatch(switchToNextTrack(tracks))
//     }
//   }, [dispatch, tracks, isActive])

//   const handleClickShuffle = useCallback(() => {
//     dispatch(setShuffleStatus(isActive))
//   }, [dispatch, isActive])

//   const handleClickOnPause = useCallback(() => {
//     dispatch(setAutoplayStatus(false))
//   }, [dispatch])

//   const handleClickOnPlay = useCallback(() => {
//     dispatch(setAutoplayStatus(true))
//   }, [dispatch])

//   // const handleAddToFavourites = useCallback(
//   //   (song: Track) => {
//   //     if (favourites.some((favTrack: Track) => favTrack.url === song.url)) {
//   //       dispatch(removeTrackFromFavourites(song))
//   //     } else {
//   //       dispatch(addTrackToFavourites(song))
//   //     }
//   //   },
//   //   [dispatch, favourites]
//   // )

//   // const checkFavouriteTrack = (song: Track) => {
//   //   if (favourites.some((favTrack: Track) => favTrack.url === song.url)) {
//   //     return true
//   //   } else {
//   //     return false
//   //   }
//   // }

//   return (
//     <PlayerWrapper progressсolor={progressColor} className="Player">
//       <AudioPlayer
//         onClickNext={handleClickNext}
//         onClickPrevious={handleClickPrevious}
//         onEnded={handleAudioEnded}
//         src={audio}
//         autoPlay={autoplay}
//         onPlay={handleClickOnPlay}
//         onPause={handleClickOnPause}
//         defaultDuration={false}
//         defaultCurrentTime={false}
//         autoPlayAfterSrcChange={false}
//         // showFilledVolume={true}
//         ref={audioCtx}
//         customIcons={{
//           play: <PlayArrow fontSize="large" className="ControlsIcon" />,
//           pause: <Pause fontSize="large" className="ControlsIcon" />,
//           volume: <VolumeUp className="ControlsIcon" />,
//           volumeMute: <VolumeOff className="ControlsIcon" />,
//         }}
//         customControlsSection={[
//           RHAP_UI.MAIN_CONTROLS,
//           RHAP_UI.ADDITIONAL_CONTROLS,
//           <PlayerControlsWrapper>
//             <div className="TrackInfo">
//               <img
//                 src={
//                   currentTrack?.logo
//                     ? currentTrack.logo
//                     : '/assets/icons/note.svg'
//                 }
//                 alt="note"
//                 width={'52px'}
//               ></img>
//               <div>
//                 <p>{currentTrack?.name}</p>
//                 <p>{currentTrack?.author}</p>
//               </div>
//             </div>
//             {/* <IconButton onClick={() => handleAddToFavourites(track)}>
//               {checkFavouriteTrack(track) ? (
//                 <Favorite className={cnPlayer('ControlsIcon')} />
//               ) : (
//                 <FavoriteBorder className={cnPlayer('ControlsIcon')} />
//               )}
//             </IconButton> */}
//           </PlayerControlsWrapper>,
//           RHAP_UI.VOLUME_CONTROLS,
//         ]}
//         customAdditionalControls={[
//           RHAP_UI.LOOP,
//           <IconButton
//             onClick={handleClickShuffle}
//             color="secondary"
//             sx={{ svg: { fontSize: '26px' }, padding: 0 }}
//           >
//             <Shuffle
//               sx={{ color: isActive ? 'white' : '#acacac' }}
//               className="ControlsIcon"
//             />
//           </IconButton>,
//         ]}
//         showSkipControls={true}
//         showJumpControls={false}
//       />
//     </PlayerWrapper>
//   )
// }

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FC } from 'react'
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
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
  // addTrackToFavourites,
  // removeTrackFromFavourites,
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
} from '../changeColor/PlayerChangeColor'

import './Player.css'
import { useAppDispatch, useAppSelector } from '../../hooks/hook'
// import {
//   setAutoplayStatus,
//   setShuffleStatus,
//   shuffleTracks,
//   switchToNextTrack,
//   switchToPreviousTrack,
// } from '../../store/trackSlice'

export type Props = {
  currentTrack?: Track
  tracks?: Track[]
}

export type PlayerProps = {
  track: Track
}

export const Player: FC<Props> = ({ currentTrack, tracks }) => {
  const dispatch = useAppDispatch()
  const [audio, setAudio] = useState(
    JSON.parse(localStorage.getItem('currentTrack')!)?.url || ''
  )
  const isActive = useAppSelector((state) => state.tracks.isShuffleActive)
  // const currentTrack = useAppSelector((state) => state.tracks.currentTrack)
  // const favourites = useAppSelector((state) => state.tracks.favourites)

  const autoplay = useAppSelector((state) => state.tracks.autoplay)
  // const alltracks = useAppSelector((state) => state.tracks.allTracks)
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

  // const handleAddToFavourites = useCallback(
  //   (song: Track) => {
  //     if (favourites.some((favTrack: Track) => favTrack.url === song.url)) {
  //       dispatch(removeTrackFromFavourites(song))
  //     } else {
  //       dispatch(addTrackToFavourites(song))
  //     }
  //   },
  //   [dispatch, favourites]
  // )

  // const checkFavouriteTrack = (song: Track) => {
  //   if (favourites.some((favTrack: Track) => favTrack.url === song.url)) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

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
        autoPlayAfterSrcChange={false}
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
              ></img>
              <div>
                <p>{currentTrack?.name}</p>
                <p>{currentTrack?.author}</p>
              </div>
            </div>
            {/* <IconButton onClick={() => handleAddToFavourites(track)}>
              {checkFavouriteTrack(track) ? (
                <Favorite className={cnPlayer('ControlsIcon')} />
              ) : (
                <FavoriteBorder className={cnPlayer('ControlsIcon')} />
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
