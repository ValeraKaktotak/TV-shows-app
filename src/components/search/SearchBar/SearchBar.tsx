import { SyntheticEvent, useRef, useState, type FC } from 'react'
import { useSelector } from 'react-redux'
import { Icons } from '../../../assets/icons'
import { Images } from '../../../assets/images'
import { selectSearchResults } from '../../../redux/selectors/showsSelector'
import {
  fetchSearchResult,
  resetSearchResult
} from '../../../redux/slices/showsSlice'
import { useAppDispatch } from '../../../redux/store'
import { NotDataFound } from '../../common/NotDataFound/NotDataFound'
import { SearchList } from '../SearchList/SearchList'
import { SearchBarWrapper } from './SearchBar.styles'

export const SearchBar: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const dispatch = useAppDispatch()
  const searchResultsData = useSelector(selectSearchResults)

  const [query, setQuery] = useState('')
  const [searchError, setSearchError] = useState('')
  const [hasValidQuery, setHasValidQuery] = useState(false)

  const isValidSearchQuery = (query: string) => {
    const regex = /^[\w\s-',.?!&]+$/i
    return regex.test(query)
  }

  const handlerQuerySubmit = (event: SyntheticEvent) => {
    event.preventDefault()

    if (isValidSearchQuery(query)) {
      dispatch(resetSearchResult())
      setHasValidQuery(true)
      setSearchError('')
      dispatch(fetchSearchResult(query))
    } else if (query.trim().length === 0) {
      setSearchError('Please enter search name.')
      setHasValidQuery(false)
    } else {
      setSearchError('Please enter valid show title or name.')
      setHasValidQuery(false)
    }
  }

  const handlerQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  return (
    <SearchBarWrapper>
      <div className='searchbar-top flex items-center justify-center '>
        <img
          src={Images.HomeBanner}
          className='obj-fit-cover searchbar-banner'
          alt=''
        />
        <form onSubmit={handlerQuerySubmit}>
          <div className='search-box flex'>
            <div className='search-input'>
              <input
                name='search_text'
                placeholder='Search for TV shows ...'
                className='text-lg font-semibold'
                onChange={handlerQueryChange}
                ref={inputRef}
                autoComplete='off'
              />
            </div>
            <button type='submit' className='search-icon bg-transparent'>
              <img src={Icons.Search} alt='Search icon' />
            </button>
            <span className='search-error-text'>{searchError}</span>
          </div>
        </form>
      </div>
      <div className='searchbar-bottom'>
        {hasValidQuery &&
          (searchResultsData && searchResultsData.length > 0 ? (
            <SearchList searchResultsData={searchResultsData} />
          ) : (
            <NotDataFound />
          ))}
      </div>
    </SearchBarWrapper>
  )
}
