import { TEXT } from '../../constants'
import { useAppSelector } from '../../hooks/hook'
import { useFilteredTracks } from '../../hooks/useFilteredTracks'
import { PageWrapper } from '../PageWrapper/PageWrapper'

// import style from './style.module.css';

export const TracksPage = () => {
  const lang = useAppSelector((state) => state.language.lang)

  return (
    <PageWrapper
      header={TEXT.header.tracks[lang]}
      tracksHook={useFilteredTracks}
    />
  )
}

// <div className="center">
//   <Tracks title="Треки" showFilter tracksHook={useFilteredTracks} />
// </div>
