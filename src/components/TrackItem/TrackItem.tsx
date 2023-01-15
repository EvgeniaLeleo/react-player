import { FavoriteBorder, Favorite } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import type { Identifier, XYCoord } from 'dnd-core'
import { FC, useRef, useCallback, useState } from 'react'
import { useDrag, useDrop } from 'react-dnd'

import { DivChangeColor } from '../ChangeColorComponents/DivChangeColor'
import { useAppDispatch, useAppSelector } from '../../hooks/hook'
import { useFavoriteTrack } from '../../hooks/useFavoriteTrack'
import { changeCurrentTrack } from '../../store/trackSlice'
import { Track } from '../../types'
import {
  colorToSecondary,
  extradarkToDark,
  extradarkToHover,
} from '../../utils/colorUtils'
import { secondsToMinSec } from '../../utils/secondsToMinSec'

import style from './style.module.css'
import { setVisibility } from '../../store/playerSlice'

const Item = {
  TRACK: 'track',
}

type Props = {
  id: number
  index: number
  track: Track
  moveTrackItem: (dragIndex: number, hoverIndex: number) => void
}

type DragItem = {
  index: number
  id: string
  type: string
}

export const TrackItem: FC<Props> = ({ id, index, moveTrackItem, track }) => {
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

  const { favorite, toggleFavoriteTrack } = useFavoriteTrack(track)

  const currentTrack = useAppSelector((state) => state.tracks.currentTrack)
  const textColor = useAppSelector((state) => state.colorTheme.textColor)
  const decorativeColor = useAppSelector(
    (state) => state.colorTheme.decorativeColor
  )
  const textColorSecondary = colorToSecondary(textColor)
  const colorHover = extradarkToHover(decorativeColor)
  const colorDark = extradarkToDark(decorativeColor)

  const isVisible = useAppSelector((state) => state.player.isVisible)

  const defineCurrentTrack = useCallback(
    (track: Track) => {
      return currentTrack.id === track.id
    },
    [currentTrack.id]
  )

  const handleChooseSong = useCallback(
    (track: Track) => {
      dispatch(changeCurrentTrack(track))
      if (!isVisible) {
        dispatch(setVisibility(true))
      }
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
          </span>
          <IconButton
            onClick={(e) => {
              e.stopPropagation()
              toggleFavoriteTrack(track?.id || 0)
            }}
            sx={{ width: '5%' }}
            style={{
              color: favorite ? decorativeColor : textColorSecondary,
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
            {track.duration_in_seconds
              ? secondsToMinSec(track.duration_in_seconds)
              : ''}
          </span>
        </span>
      </DivChangeColor>
    </div>
  )
}
