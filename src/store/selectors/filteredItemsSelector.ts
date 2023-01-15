import { RootState } from '..'

export const filteredItemsSelector = (state: RootState) => state.filteredItems

export const checkedGenresSelector = (state: RootState) =>
  state.filteredItems.checkedGenres

export const checkedArtistsSelector = (state: RootState) =>
  state.filteredItems.checkedArtists

export const checkedYearsSelector = (state: RootState) =>
  state.filteredItems.checkedYears
