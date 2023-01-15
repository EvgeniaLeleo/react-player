import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'

export type Languages = 'ru' | 'en' | 'bel'

export type Order = 'notSelected' | 'ASC' | 'DESC'

export type Tracks = {
  count: number
  next?: string
  previous?: string
  results: Track[]
}

export type Track = {
  id: number
  name: string
  author: string
  release_date?: string
  genre?: string
  duration_in_seconds?: number
  album?: string
  logo?: string
  track_file?: string
  stared_user?: StaredUser[]
}

export type StaredUser = {
  id: number
  username: string
  first_name: string
  last_name: string
  email: string
}

export type FilterItem = {
  value: string
  selected: boolean
}

export type UserTokens = {
  access: string
  refresh: string
}

export type FiledNames = 'author' | 'name' | 'genre' | 'release_date'

export type FilterData = {
  field: FiledNames
  query: string[]
}

export type Collection = {
  id: number
  items: Track[]
  owner: string
  name: string
}

export type User = {
  id: number
  username: string
  first_name?: string
  last_name?: string
  email: string
}

export type PlayerState = {
  isPlaying: boolean
  mute: boolean
  progress: number
  loop: boolean
  shuffle: boolean
}

export type LoginFormState = {
  username: string
  password: string
  passwordRepeat: string
  register: boolean
  enableSubmit: boolean
  errorUsername: boolean
  errorPassword: boolean
  errorPasswordsDiffer: boolean
  error: FetchBaseQueryError | SerializedError | null
}

export type FilterButtonName =
  | 'checkedArtists'
  | 'checkedYears'
  | 'checkedGenres'

export type CheckedItems = {
  checkedArtists: string[]
  checkedYears: string[]
  checkedGenres: string[]
}

export type FilterSlice = {
  field: FieldNames
  filter: Filter
}

export type Filter = {
  author: FilterItem[]
  release_date: FilterItem[]
  genre: FilterItem[]
}

export type FieldNames = 'author' | 'genre' | 'release_date'

export type FilterMark = {
  field: FieldNames
  value: string
}

export const initialState: FilterSlice = {
  field: 'author',
  filter: {
    author: [],
    release_date: [],
    genre: [],
  },
}

export type SignupUser = {
  username: string
  email: string
  password: string
}

export type LoginUser = {
  email: string
  password: string
}

export type ColorState = {
  textColor: string
  bgColor: string
  decorativeColor: string
}

export const EMPTY_ARTIST = 'sorry_empty_artist'

export const EMPTY_RESULTS = [
  {
    _id: 'empty_results',
    artist: EMPTY_ARTIST,
  },
]
