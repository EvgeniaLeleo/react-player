/**
 * Генерация окончательного массива, соответствующего всем и фильтрам
 */

import { EMPTY_RESULTS, ORDER } from '../constants';
import { SongType, TCheckedItems, TOrder } from '../types';
import { checkedArtistsFilterArray } from './checkedArtistsFilterArray';
import { checkedGenresFilterArray } from './checkedGenresFilterArray';
import { checkedYearsFilterArray } from './checkedYearsFilterArray';
import { commonItems } from './commonItems';
import { getSortedByOrderArray } from './getSortedByOrderArray';

export const getFinalItems: (
  allTracks: SongType[],
  checkedItemsObj: TCheckedItems,
  searchedItems: SongType[],
  order: TOrder,
) => SongType[] = (allTracks, checkedItemsObj, searchedItems, order) => {
  // console.log('--> checkedItems', checkedItemsObj);
  // console.log('--> allTracks', allTracks);

  const checkedArtistsArray = checkedItemsObj.checkedArtists.length
    ? checkedArtistsFilterArray(checkedItemsObj.checkedArtists, allTracks)
    : allTracks;
  // console.log('--> checkedArtistsArray', checkedArtistsArray);

  const checkedYearsArray = checkedItemsObj.checkedYears.length
    ? checkedYearsFilterArray(checkedItemsObj.checkedYears, allTracks)
    : allTracks;
  // console.log('--> checkedYearsArray', checkedYearsArray);

  const checkedGenresArray = checkedItemsObj.checkedGenres.length
    ? checkedGenresFilterArray(checkedItemsObj.checkedGenres, allTracks)
    : allTracks;
  // console.log('--> checkedGenresArray', checkedGenresArray);

  const commonArtistsYearsGenres = commonItems(
    commonItems(checkedArtistsArray, checkedYearsArray),
    checkedGenresArray,
  );
  // console.log('--> commonArtistsYearsGenres', commonArtistsYearsGenres);
  // console.log('--> searchedItems', searchedItems);

  let finalItems = commonItems(commonArtistsYearsGenres, searchedItems);

  if (order === ORDER.asc || order === ORDER.desc) {
    finalItems = getSortedByOrderArray(finalItems, order);
  }

  // console.log('--> order', order);
  // console.log('--> finalItems', finalItems);

  return finalItems.length ? finalItems : EMPTY_RESULTS;
};
