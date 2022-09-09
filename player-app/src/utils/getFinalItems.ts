/**
 * Генерация окончательного массива, соответствующего всем и фильтрам
 */

import { EMPTY_RESULTS, ORDER } from '../constants';
import { TSong, TCheckedItems, TOrder } from '../types';
import { checkedArtistsFilterArray } from './checkedArtistsFilterArray';
import { checkedGenresFilterArray } from './checkedGenresFilterArray';
import { checkedYearsFilterArray } from './checkedYearsFilterArray';
import { commonItems } from './commonItems';
import { getSortedByOrderArray } from './getSortedByOrderArray';

export const getFinalItems: (
  allTracks: TSong[],
  checkedItemsObj: TCheckedItems,
  searchedItems: TSong[],
  order: TOrder,
) => TSong[] = (allTracks, checkedItemsObj, searchedItems, order) => {
  const checkedArtistsArray = checkedItemsObj.checkedArtists.length
    ? checkedArtistsFilterArray(checkedItemsObj.checkedArtists, allTracks)
    : allTracks;

  const checkedYearsArray = checkedItemsObj.checkedYears.length
    ? checkedYearsFilterArray(checkedItemsObj.checkedYears, allTracks)
    : allTracks;

  const checkedGenresArray = checkedItemsObj.checkedGenres.length
    ? checkedGenresFilterArray(checkedItemsObj.checkedGenres, allTracks)
    : allTracks;

  const commonArtistsYearsGenres = commonItems(
    commonItems(checkedArtistsArray, checkedYearsArray),
    checkedGenresArray,
  );

  let finalItems = commonItems(commonArtistsYearsGenres, searchedItems);

  if (order === ORDER.asc || order === ORDER.desc) {
    finalItems = getSortedByOrderArray(finalItems, order);
  }

  return finalItems.length ? finalItems : EMPTY_RESULTS;
};
