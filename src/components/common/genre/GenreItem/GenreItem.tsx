import type { FC } from 'react'

interface GenreItemInterface {
  data: GENRES_Interface
  key?: string
}

export const GenreItem: FC<GenreItemInterface> = ({ data }) => {
  return <div>{data.name}</div>
}
