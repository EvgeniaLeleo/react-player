import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '.'
import {
  FieldNames,
  Filter,
  FilterItem,
  FilterMark,
  initialState,
  Track,
} from '../types'

// возвращает первоначальное значение фильтра из data по заданному полю
const getFilterDataByField = (data: Track[], field: FieldNames) => {
  if (field === 'release_date') {
    const yearList = data.map((item: Track) =>
      item.release_date ? Number(item.release_date.split('-')[0]) : 0
    )

    const orderedList = Array.from(new Set(yearList))
      .filter((item) => item !== 0)
      .sort((a, b) => b! - a!)
    return orderedList.map((item) => ({ value: String(item), selected: false }))
  }

  const tempList = data
    .map((item: Track) => item[field]!)
    .filter((item) => item !== '-')
  const orderedList = Array.from(new Set(tempList)).sort()
  return orderedList.map((item) => ({ value: item, selected: false }))
}

// копируем установленные фильтры
const copyFilterSelection = (
  filterSelection: FilterItem[],
  newFilterData: FilterItem[]
) => {
  for (let oldItem of filterSelection) {
    if (oldItem.selected) {
      const res = newFilterData.find(
        (newItem: FilterItem) => newItem.value === oldItem.value
      )
      if (res) res.selected = oldItem.selected
    }
  }
  return newFilterData
}

const updateFilterByField = (
  state: Filter,
  payload: Track[],
  field: FieldNames
) => {
  const dataSet = getFilterDataByField(payload, field)
  state[field] = [...copyFilterSelection(state[field], dataSet)]
}

const setFilter = (
  state: Filter,
  payload: FilterMark,
  selected: boolean = true
) => {
  const { field, value } = payload
  const update_item = state[field].find((el: FilterItem) => el.value === value)
  if (update_item) update_item.selected = selected
}

const toggleFilterFunc = (state: Filter, payload: FilterMark) => {
  const { field, value } = payload
  const update_item = state[field].find((el: FilterItem) => el.value === value)
  if (update_item) update_item.selected = !update_item.selected
}

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
