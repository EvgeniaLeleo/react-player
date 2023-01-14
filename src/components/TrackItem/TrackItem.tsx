import { FavoriteBorder, Favorite } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import type { Identifier, XYCoord } from 'dnd-core'
import { FC, useRef, useCallback } from 'react'
import { useDrag, useDrop } from 'react-dnd'

import { DivChangeColor } from '../../components/changeColor/DivChangeColor'
import { useAppDispatch, useAppSelector } from '../../hooks/hook'
import { useFavoriteTrack } from '../../hooks/useFavoriteTrack'
import {
  addFavoriteTrack,
  changeCurrentTrack,
  removeFavoriteTrack,
} from '../../store/trackSlice'
import { Track } from '../../types'
import {
  colorToSecondary,
  extradarkToDark,
  extradarkToHover,
} from '../../utils/colorUtils'
import { secondsToHms } from '../../utils/secondsToHms'

import style from './style.module.css'

export const Item = {
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
    accept: Item.TRACK,
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
    type: Item.TRACK,
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
  const { favorite, toggleFavoriteTrack } = useFavoriteTrack(track)

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

  // const { isFavorite } = useAppSelector((state) => state.modal)

  const favoriteTracks = useAppSelector((state) => state.tracks.favoriteTracks)

  const handleChooseSong = useCallback(
    (track: Track) => {
      dispatch(changeCurrentTrack(track))
    },
    [dispatch]
  )

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
            src="/assets/icons/note.svg"
            alt="Album_image"
          />
          <span className={style.Name}>{track.name}</span>
          <span className={style.Author}>{track.author}</span>
          <span className={style.Album} style={{ color: textColorSecondary }}>
            {track.album}, {track.release_date?.slice(0, 4)}
          </span>{' '}
          <IconButton
            onClick={(e) => {
              e.stopPropagation()
              toggleFavoriteTrack(track?.id || 0)
              // console.log(track)
              // if (favoriteTracks.includes(track?.id)) {
              //   dispatch(removeFavoriteTrack(track?.id))
              //   console.log(track?.id)
              // } else {
              //   dispatch(addFavoriteTrack(track?.id))
              //   console.log(track?.id)
              // }
            }}
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
