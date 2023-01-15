import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '.'
import { FilterMark, initialState } from '../types'
import { toggleFilterFunc } from '../utils/toggleFilterFunc'

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleFilter: (state, action: PayloadAction<FilterMark>) =>
      toggleFilterFunc(state.filter, action.payload),
  },
})

export const { toggleFilter } = filterSlice.actions

export const selectFilter = (state: RootState) => state.filter

export default filterSlice.reducer
