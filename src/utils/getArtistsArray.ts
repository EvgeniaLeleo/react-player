/**
 * Формирует массив артистов выпуска из исходного массива объектов-треков
 */

import { TSong } from '../types';

export const getArtistsArray: (tracks: TSong[]) => string[] = (tracks) => {
  let authorsArray: string[] = [];
  tracks.forEach((track) => {
    if (track.author && !authorsArray.includes(track.author)) {
      authorsArray.push(track.author);
    }
  });
  return authorsArray;
};
