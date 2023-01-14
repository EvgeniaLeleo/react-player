import { Filter, FilterMark, FilterItem } from '../types'

export const toggleFilterFunc = (state: Filter, payload: FilterMark) => {
  const { field, value } = payload
  const update_item = state[field].find((el: FilterItem) => el.value === value)
  if (update_item) update_item.selected = !update_item.selected
}
