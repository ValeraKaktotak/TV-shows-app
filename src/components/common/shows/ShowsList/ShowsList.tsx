import type { FC } from 'react'
import { ShowsListWrapper } from './ShowsList.styles'

interface IShowsList {
  showsData: ShowsData_Interface[]
}

export const ShowsList: FC<IShowsList> = ({ showsData }) => {
  console.log(showsData)

  return (
    <ShowsListWrapper>
      <div></div>
    </ShowsListWrapper>
  )
}
