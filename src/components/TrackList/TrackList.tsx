import update from 'immutability-helper'
import { FC, useEffect, useCallback, useState } from 'react'

import { useAppDispatch } from '../../hooks/hook'
import { setMovedStatus, uploadMovedTracks } from '../../store/trackSlice'
import { Track } from '../../types'
import { TrackItem } from '../TrackItem/TrackItem'

export const TrackList: FC<{ header?: string; tracks: Track[] }> = ({
  header,
  tracks,
}) => {
  const dispatch = useAppDispatch()

  const [trackItems, setTrackItems] = useState(tracks)

  useEffect(() => {
    setTrackItems(tracks)
  }, [tracks, header])

  useEffect(() => {
    dispatch(uploadMovedTracks(trackItems))
    dispatch(setMovedStatus(true))
  }, [dispatch, trackItems])

  const moveTrackItem = useCallback((dragIndex: number, hoverIndex: number) => {
    setTrackItems((prevTrackItems: Track[]) =>
      update(prevTrackItems, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevTrackItems[dragIndex] as Track],
        ],
      })
    )
  }, [])

  const renderTrackItem = useCallback((track: Track, index: number) => {
    return (
      <TrackItem
        key={track.id}
        index={index}
        id={track.id}
        moveTrackItem={moveTrackItem}
        track={track}
      />
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {trackItems.map((track: Track, i: number) => renderTrackItem(track, i))}
    </div>
  )
}
