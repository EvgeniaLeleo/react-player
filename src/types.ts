import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

export type Languages = 'ru' | 'en' | 'bel';

export type Order = 'notSelected' | 'ASC' | 'DESC';

export type Tracks = {
  count: number;
  next?: string;
  previous?: string;
  results: Track[];
};

export type Track = {
  id: number;
  name: string;
  author: string;
  release_date?: string;
  genre?: string;
  duration_in_seconds?: number;
  album?: string;
  logo?: string;
  track_file?: string;
  stared_user?: StaredUser[];
};

export type StaredUser = {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
};

export type FilterItem = {
  value: string;
  selected: boolean;
};

export type UserTokens = {
  access: string;
  refresh: string;
};

export type FiledNames = 'author' | 'name' | 'genre' | 'release_date';

export type FilterData = {
  field: FiledNames;
  query: string[];
};

export type Collection = {
  id: number;
  items: Track[];
  owner: string;
  name: string;
};

export type User = {
  id: number;
  username: string;
  first_name?: string;
  last_name?: string;
  email: string;
};

export type PlayerState = {
  isPlaying: boolean;
  mute: boolean;
  progress: number;
  loop: boolean;
  shuffle: boolean;
};

export type LoginFormState = {
  username: string;
  password: string;
  passwordRepeat: string;
  register: boolean;
  enableSubmit: boolean;
  errorUsername: boolean;
  errorPassword: boolean;
  errorPasswordsDiffer: boolean;
  error: FetchBaseQueryError | SerializedError | null;
};

export type FilterButtonName =
  | 'checkedArtists'
  | 'checkedYears'
  | 'checkedGenres';

export type CheckedItems = {
  checkedArtists: string[];
  checkedYears: string[];
  checkedGenres: string[];
};
