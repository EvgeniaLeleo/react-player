export type SongType = {
  _id?: string;
  album?: string;
  artist?: string;
  img?: string;
  rank?: number;
  title?: string;
  url?: string;
  urlPlay?: string;
  year?: string;
  duration?: string;
  genre?: string;
};

export type USER = { name: string; login: string; avatar: string };

export type TLanguages = 'ru' | 'en' | 'bel';

export type TOrder = 'notSelected' | 'ASC' | 'DESC';

export type TFilterButtonName =
  | 'checkedArtists'
  | 'checkedYears'
  | 'checkedGenres';

export type TCheckedItems = {
  checkedArtists: string[];
  checkedYears: string[];
  checkedGenres: string[];
};

// export type TTrack = {
//   id: number;
//   name: string;
//   author: string;
//   release_date: string | null;
//   genre: string;
//   duration_in_seconds: number;
//   album: string;
//   logo: string | null;
//   track_file: string;
//   stared_user: [];
// };

// export type TData = {
//   count: number;
//   next: string | null;
//   previous: string | null;
//   results: TTrack[];
// };
