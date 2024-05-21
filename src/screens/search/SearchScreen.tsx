import { type FC,useEffect } from 'react'

import { SearchBar } from '../../components'
import { scrollToTop } from '../../utilities/scrollToTop'

export const SearchScreen: FC = () => {
  useEffect(() => scrollToTop(), [])

  return (
    <div className='pg-search top-spacing-fix'>
      <SearchBar />
    </div>
  )
}
