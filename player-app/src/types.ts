export type TTrack = {
  id: number;
  name: string;
  author: string;
  release_date: string | null;
  genre: string;
  duration_in_seconds: number;
  album: string;
  logo: string | null;
  track_file: string;
  stared_user: [];
};

export type TData = {
  count: number;
  next: string | null;
  previous: string | null;
  results: TTrack[];
};

export type SongType = {
  _id?: number;
  album?: string;
  artist?: string;
  img?: string;
  rank?: number;
  title?: string;
  url?: string;
  urlPlay?: string;
  year?: string;
  duration?: string;
};

// export type THeader =
//   | 'Треки'
//   | 'Плейлист дня'
//   | '100 танцевальных хитов'
//   | 'Инди заряд'
//   | 'Мои треки'
//   | 'Личный кабинет';

export type USER = { name: string; login: string; avatar: string };

// export type TDictionary = { ru: string; en: string };

export type TLanguages = 'ru' | 'en' | 'bel';
