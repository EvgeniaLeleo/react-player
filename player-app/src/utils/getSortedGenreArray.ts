import { SongType } from '../types';

/**
 * Формирует массив жанров из исходного массива объектов-треков
 */

const getGenreArray: (tracks: SongType[]) => string[] = (tracks) => {
  let genreArray: string[] = [];
  tracks.forEach((track) => {
    if (track.genre && !genreArray.includes(track.genre)) {
      genreArray.push(track.genre);
    }
  });
  return genreArray;
};

/**
 * Формирует сортированный в алфавитном порядке массив жанров
 */

export const getSortedGenreArray: (tracks: SongType[]) => string[] = (
  tracks,
) => {
  const genreArray = getGenreArray(tracks);
  const sortedArray = genreArray.sort((a, b) => (a < b ? -1 : 1));
  return sortedArray;
};
