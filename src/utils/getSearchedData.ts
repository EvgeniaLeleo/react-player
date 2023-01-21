import { Track } from '../types'

export const getSearchedData = (data: Track[], query = '') =>
  data.filter((item: Track) =>
    item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  )
