import { Filter, FilterMark, FilterItem } from '../types'

export const setFilter = (
  state: Filter,
  payload: FilterMark,
  selected: boolean = true
) => {
  const { field, value } = payload
  const update_item = state[field].find((el: FilterItem) => el.value === value)

  if (update_item) {
    update_item.selected = selected
  }
}
