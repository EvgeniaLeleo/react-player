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

// export type THeader =
//   | 'Треки'
//   | 'Плейлист дня'
//   | '100 танцевальных хитов'
//   | 'Инди заряд'
//   | 'Мои треки'
//   | 'Личный кабинет';

export type USER = { name: string; login: string; avatar: string };
