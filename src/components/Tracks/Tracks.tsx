import { FC } from 'react'

import { EMPTY_ARTIST, TEXT } from '../../constants'
import { useAppSelector } from '../../hooks/hook'
import { textColorSelector } from '../../store/selectors/colorThemeSelector'
import { languageSelector } from '../../store/selectors/languageSelector'
import { Track } from '../../types'
import { SkeletonTrack } from '../SkeletonTrack/SkeletonTrack'
import { TrackList } from '../TrackList/TrackList'

const array = new Array(10).fill(0)

type Props = {
  isError: boolean
  isLoading: boolean
  tracks: Track[]
  filteredTracks: Track[]
  header: string
}

export const Tracks: FC<Props> = ({
  isError,
  isLoading,
  header,
  tracks,
  filteredTracks,
}) => {
  const textColor = useAppSelector(textColorSelector)
  const lang = useAppSelector(languageSelector)

  if (isError) {
    return <div style={{ color: textColor }}>Произошла ошибка</div>
  }

  if (isLoading) {
    return (
      <>
        {array.map((_, i) => (
          <SkeletonTrack key={i.toString()} />
        ))}
      </>
    )
  }

  if (filteredTracks[0]?.author === EMPTY_ARTIST) {
    return <div style={{ color: textColor }}>{TEXT.empty_results[lang]}</div>
  }

  if (tracks.length === 0 && header !== TEXT.header.mytracks[lang]) {
    return <div style={{ color: textColor }}>{TEXT.empty_results[lang]}</div>
  }

  if (tracks.length === 0 && header === TEXT.header.mytracks[lang]) {
    return <div style={{ color: textColor }}>{TEXT.no_favourites[lang]}</div>
  }

  return <TrackList header={header} tracks={filteredTracks} />
}
