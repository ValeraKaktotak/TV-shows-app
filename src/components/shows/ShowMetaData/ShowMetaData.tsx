import type { FC } from 'react'

interface IShowMetaData {
  metaData: ShowMetadata | null
}

export const ShowMetaData: FC<IShowMetaData> = ({ metaData }) => {
  return <div>ShowMetaData</div>
}
