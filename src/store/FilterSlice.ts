import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '.'
import { FieldNames, FilterMark, initialState, Track } from '../types'
import { setFilter } from '../utils/setFilter'
import { toggleFilterFunc } from '../utils/toggleFilterFunc'
import { updateFilterByField } from './updateFilterByField'

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    clearFilter: (state) => {
      state = initialState
    },
    updateFilter: (state, action: PayloadAction<Track[]>) => {
      let field: FieldNames = 'author'
      for (field in state.filter)
        updateFilterByField(state.filter, action.payload, field)
    },
    markFilter: (state, action: PayloadAction<FilterMark>) =>
      setFilter(state.filter, action.payload),
    unmarkFilter: (state, action: PayloadAction<FilterMark>) =>
      setFilter(state.filter, action.payload, false),
    toggleFilter: (state, action: PayloadAction<FilterMark>) =>
      toggleFilterFunc(state.filter, action.payload),
    setFilterField: (state, action: PayloadAction<FieldNames>) => {
      state.field = action.payload
    },
  },
})

export const { clearFilter, updateFilter, toggleFilter, setFilterField } =
  filterSlice.actions

export const selectFilterByField = (state: RootState, field: FieldNames) =>
  state.filter.filter[field]

export const selectFilter = (state: RootState) => state.filter

export default filterSlice.reducer
