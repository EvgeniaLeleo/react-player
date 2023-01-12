import { FavoriteBorder, Favorite } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import type { Identifier, XYCoord } from 'dnd-core'
import { FC, useRef, useCallback } from 'react'
import { useDrag, useDrop } from 'react-dnd'

import { DivChangeColor } from '../../components/changeColor/DivChangeColor'
import { useAppDispatch, useAppSelector } from '../../hooks/hook'
import { changeCurrentTrack } from '../../store/trackSlice'
import { Track } from '../../types'
import {
  colorToSecondary,
  extradarkToDark,
  extradarkToHover,
} from '../../utils/colorUtils'
import { secondsToHms } from '../../utils/secondsToHms'

import style from './style.module.css'

export const ItemTypes = {
  TRACK: 'track',
}

export interface TrackItemProps {
  id: any
  index: number
  track: Track
  moveTrackItem: (dragIndex: number, hoverIndex: number) => void
}

interface DragItem {
  index: number
  id: string
  type: string
}

export const TrackItem: FC<TrackItemProps> = ({
  id,
  index,
  moveTrackItem,
  track,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: ItemTypes.TRACK,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) {
        return
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect()

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      const clientOffset = monitor.getClientOffset()

      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      moveTrackItem(dragIndex, hoverIndex)

      item.index = hoverIndex
    },
  })

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.TRACK,
    item: () => {
      return { id, index }
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const opacity = isDragging ? 0 : 1
  drag(drop(ref))

  const dispatch = useAppDispatch()

  const currentTrack = useAppSelector((state) => state.tracks.currentTrack)
  // const favourites = useAppSelector((state) => state.tracks.favourites)

  const textColor = useAppSelector((state) => state.colorTheme.textColor)
  const decorativeColor = useAppSelector(
    (state) => state.colorTheme.decorativeColor
  )
  const textColorSecondary = colorToSecondary(textColor)
  const colorHover = extradarkToHover(decorativeColor)
  const colorDark = extradarkToDark(decorativeColor)

  const defineCurrentTrack = useCallback(
    (track: Track) => {
      return currentTrack.id === track.id
    },
    [currentTrack.id]
  )

  const handleChooseSong = useCallback(
    (track: Track) => {
      dispatch(changeCurrentTrack(track))
    },
    [dispatch]
  )

  // const handleAddToFavourites = useCallback(
  //   (track: Track) => {
  //     if (
  //       favourites.some(
  //         (favTrack: Track) => favTrack.track_file === track.track_file
  //       )
  //     ) {
  //       dispatch(removeTrackFromFavourites(track))
  //     } else {
  //       dispatch(addTrackToFavourites(track))
  //     }
  //   },
  //   [dispatch, favourites]
  // )

  // const checkFavouriteTrack = (track: Track) => {
  //   if (
  //     favourites.some(
  //       (favTrack: Track) => favTrack.track_file === track.track_file
  //     )
  //   ) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  return (
    <div
      ref={ref}
      className={style.Info}
      style={{ opacity }}
      data-handler-id={handlerId}
    >
      <DivChangeColor
        color={defineCurrentTrack(track) ? colorHover : textColor}
        colorHover={colorHover}
        colorActive={colorDark}
        className={style.Info}
        key={track.id}
      >
        <span onClick={() => handleChooseSong(track)} className={style.Info}>
          <img
            className={style.Icon}
            // src={track.img ? track.img : './icons/note.svg'}
            src="/assets/icons/note.svg"
            alt="Album_image"
          ></img>
          <span className={style.Name}>{track.name}</span>
          <span className={style.Author}>{track.author}</span>
          <span className={style.Album} style={{ color: textColorSecondary }}>
            {track.album}, {track.release_date?.slice(0, 4)}
          </span>{' '}
          <IconButton
            // onClick={() => handleAddToFavourites(track)}
            sx={{ width: '5%' }}
            // style={{
            //   color: checkFavouriteTrack(track)
            //     ? 'rgb(223 82 82)'
            //     : textColorSecondary,
            // }}
          >
            {/* {checkFavouriteTrack(track) ? (
              <Favorite fontSize="small" />
            ) : (
              <FavoriteBorder fontSize="small" />
            )} */}
          </IconButton>
          <span
            className={style.Duration}
            style={{ color: textColorSecondary }}
          >
            {track?.duration_in_seconds
              ? secondsToHms(track.duration_in_seconds)
              : ''}
          </span>
        </span>
      </DivChangeColor>
    </div>
  )
}
