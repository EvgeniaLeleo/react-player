import { Filter, Track, FieldNames } from '../types'
import { getFilterDataByField } from '../utils/getFilterDataByField'
import { copyFilterSelection } from './copyFilterSelection'

export const updateFilterByField = (
  state: Filter,
  payload: Track[],
  field: FieldNames
) => {
  const dataSet = getFilterDataByField(payload, field)
  state[field] = [...copyFilterSelection(state[field], dataSet)]
}
