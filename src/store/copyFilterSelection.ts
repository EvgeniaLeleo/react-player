import { FilterItem } from '../types'

// копируем установленные фильтры
export const copyFilterSelection = (
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
