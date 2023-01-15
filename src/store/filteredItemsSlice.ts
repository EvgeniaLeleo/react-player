import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type State = {
  checkedArtists: string[]
  checkedYears: string[]
  checkedGenres: string[]
}

const initialState: State = {
  checkedArtists: [],
  checkedYears: [],
  checkedGenres: [],
}

const filteredItemsSlice = createSlice({
  name: 'filteredItems',
  initialState,
  reducers: {
    updateCheckedArtists(state, action: PayloadAction<string[]>) {
      state.checkedArtists = action.payload
    },
    updateCheckedYears(state, action: PayloadAction<string[]>) {
      state.checkedYears = action.payload
    },
    updateCheckedGenres(state, action: PayloadAction<string[]>) {
      state.checkedGenres = action.payload
    },
  },
})

export const { updateCheckedArtists, updateCheckedYears, updateCheckedGenres } =
  filteredItemsSlice.actions

export default filteredItemsSlice.reducer
