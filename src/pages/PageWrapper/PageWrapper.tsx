import { FC, useEffect, useState } from 'react'

import { NavMenu } from '../../components/NavMenu/NavMenu'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Centerblock } from '../../components/Centerblock/Centerblock'
import { Player } from '../../components/Player/Player'
import { TEXT } from '../../constants'
import { useAppDispatch, useAppSelector } from '../../hooks/hook'
import { Profile } from '../../components/Profile/Profile'

import {
  changeAutoplayStatus,
  selectActiveTrackId,
} from '../../store/trackSlice'
import { Track } from '../../types'

import style from './style.module.css'
import { InputAdornment, TextField } from '@mui/material'
import { Search } from '@mui/icons-material'

export type Props = {
  header?: string
  collectionId?: number
  tracksHook?: Function
  isProfilePage?: boolean
}

// const Wrapper = styled(Box)`
//   max-width: 100%;
// `

export const PageWrapper: FC<Props> = ({
  header,
  collectionId = 1,
  tracksHook,
  isProfilePage = false,
}) => {
  const [searchString, setSearchString] = useState('')
  const {
    // isLoading,
    // isError,
    data: tracks,
  } = tracksHook ? tracksHook(searchString, collectionId) : { data: [] }

  const activeTrackId = useAppSelector(selectActiveTrackId)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchString(e.target.value)

  const isTrackIdInList = (trackIdArg: number) =>
    tracks.find((el: Track) => el.id === trackIdArg)

  const dispatch = useAppDispatch()

  const currentTrack = useAppSelector((state) => state.tracks.currentTrack)
  // // const allTracks = useAppSelector((state) => state.tracks.allTracks);

  // const [tracks, setTracks] = useState<Track[]>(data || [])

  const lang = useAppSelector((state) => state.language.lang)
  const bgColor = useAppSelector((state) => state.colorTheme.bgColor)

  // const isPlaying = useAppSelector((state) => state.tracks.autoplay)

  // const [isAutoPlay, setIsAutoPlay] = useState<boolean>(false)
  // useEffect(() => {
  //   if (isPlaying) {
  //     // setIsAutoPlay(false)
  //     dispatch(changeAutoplayStatus(false))
  //     console.log('false')
  //   }
  // }, [])

  // useEffect(() => {
  //   if (data?.length) {
  //     setTracks(data)

  //     // dispatch(uploadAllTracks(data))

  //     dispatch(
  //       updateSortedArtists(getArtistsArray(getSortedByArtistsArray(data)))
  //     )
  //     dispatch(updateSortedYears(getYearsArray(getSortedByYearsArray(data))))
  //     dispatch(updateSortedGenres(getGenresArray(getSortedByGenresArray(data))))
  //     // dispatch(uploadDanceTracks(checkedGenresFilterArray([ALBUM_DANCE], data)))
  //     // dispatch(
  //     //   uploadRandomTracks(getRandomTracks(NUMBER_OF_RANDOM_ITEMS, data))
  //     // )
  //     dispatch(updateSearchQuery(''))

  //     return
  //   }

  //   // if (!initRequestState || !data) {
  //   //   setItems([]);
  //   //   return;
  //   // }

  //   // dispatch(setInitRequest(false));
  // }, [data, dispatch])

  // // console.log(allTracks);

  // // useEffect(() => {
  // //   if (allTracks.length) {
  // //     setTracks(allTracks);
  // //   } else if (tracks) {
  // //     console.log('d', tracks);

  // //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // // }, [allTracks]);

  // TODO селектить currentTrack сразу в плеер?

  const textColor = useAppSelector((state) => state.colorTheme.textColor)

  const handleSearch = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchString(e.target.value)
  }

  useEffect(() => {
    return () => setSearchString('')
  }, [header])

  return (
    <div style={{ backgroundColor: bgColor }}>
      <div
        style={{
          display: 'flex',
          maxWidth: '1920px',
          minHeight: '100vh',
          margin: '0 auto',
        }}
      >
        <NavMenu />

        {isProfilePage && <Profile />}
        {!isProfilePage && (
          <div className={style.centerblockWrapper}>
            <form className={style.InputWrapper}>
              <TextField
                value={searchString}
                onChange={(e) => handleSearch(e)}
                InputLabelProps={{}}
                placeholder={TEXT.searchInput[lang]}
                fullWidth
                autoComplete="off"
                variant="standard"
                type={'search'}
                sx={{
                  mt: '5px',
                  input: { color: textColor },
                  label: { color: textColor, pl: '30px' },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment sx={{ color: textColor }} position="start">
                      <Search
                        style={{ color: textColor }}
                        className={style.Input}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </form>
            <Centerblock
              tracks={tracks}
              header={header}
              searchString={searchString}
            />
          </div>
        )}

        <Sidebar
          isVisible={header === TEXT.header.tracks[lang]}
          isUserVisible={header !== TEXT.menu.profile[lang]}
        />
      </div>
      <Player currentTrack={currentTrack} tracks={tracks} />
    </div>
  )
}
