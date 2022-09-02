/**
 * Генерация окончательного массива, соответствующего всем и фильтрам
 */

import { SongType } from '../types';
import { checkedArtistsFilterArray } from './checkedArtistsFilterArray';
import { checkedGenresFilterArray } from './checkedGenresFilterArray';
import { checkedYearsFilterArray } from './checkedYearsFilterArray';
import { commonItems } from './commonItems';

// ///////поправить года и жанры

export const getFinalItems: (
  allTracks: SongType[],
  checkedItems: string[],
) => SongType[] = (allTracks, checkedItems) => {
  // const allTracks = JSON.parse(localStorage.getItem('allTracks') || '[]');
  // console.log('--> checkedItems', checkedItems);
  // console.log('--> allTracks', allTracks);

  const checkedArtistsArray = checkedArtistsFilterArray(checkedItems, allTracks)
    .length
    ? checkedArtistsFilterArray(checkedItems, allTracks)
    : allTracks;
  // console.log('--> checkedArtistsArray', checkedArtistsArray);
  const checkedYearsArray = checkedYearsFilterArray(allTracks).length
    ? checkedYearsFilterArray(allTracks)
    : allTracks;
  // console.log('--> checkedYearsArray', checkedYearsArray);
  const checkedGenresArray = checkedGenresFilterArray(allTracks).length
    ? checkedGenresFilterArray(allTracks)
    : allTracks;
  // console.log('--> checkedGenresArray', checkedGenresArray);

  const commonArtistsYearsGenres = commonItems(
    commonItems(
      commonItems(checkedArtistsArray, checkedYearsArray),
      checkedGenresArray,
    ),
    allTracks,
  );
  // console.log('--> commonArtistsYearsGenres', commonArtistsYearsGenres);

  return commonArtistsYearsGenres;
};
