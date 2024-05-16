import type { FC } from 'react'
import { ShowsList } from '../../common/shows/ShowsList/ShowsList'
import { SearchListWrapper } from './SearchList.styles'

interface ISearchList {
  searchResultsData: SearchShowsData_Interface[]
}

export const SearchList: FC<ISearchList> = ({ searchResultsData }) => {
  const showsData = searchResultsData.map((singleResult) => singleResult.show)

  return (
    <SearchListWrapper>
      <ShowsList showsData={showsData} showsTitle={'Search Result'} />
    </SearchListWrapper>
  )
}
