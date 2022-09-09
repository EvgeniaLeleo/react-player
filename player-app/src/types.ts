// export type SongType = {
//   id?: string;
//   album?: string;
//   author?: string;
//   img?: string;
//   rank?: number;
//   title?: string;
//   url?: string;
//   urlPlay?: string;
//   year?: string;
//   duration?: string;
//   genre?: string;
//   lyrics?: string;
//   minus?: string;
// };

export type TStaredUser = {
  id?: number;
  username?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
};

export type TSong = {
  id?: number;
  name?: string;
  author?: string;
  release_date?: string; // "1991-09-07",
  genre?: string;
  duration_in_seconds?: number;
  album?: string;
  logo?: null;
  track_file?: string;
  stared_user?: TStaredUser[];
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
