import { SyntheticEvent, useRef, useState, type FC } from 'react'
import { Icons } from '../../../assets/icons'
import { Images } from '../../../assets/images'
import { useAppDispatch } from '../../../redux/store'
import { SearchBarWrapper } from './SearchBar.styles'

export const SearchBar: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const dispatch = useAppDispatch()

  const [query, setQuery] = useState('')
  const [searchError, setSearchError] = useState('')
  const [hasValidQuery, setHasValidQuery] = useState(false)

  const isValidSearchQuery = (query: string) => {
    const regex = /^[\w\s-',.?!&]+$/i
    return regex.test(query)
  }

  const handlerQuerySubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    const target = (event.target as HTMLFormElement).search_text.value
    if (isValidSearchQuery(query)) {
      //dispatch()
      setHasValidQuery(true)
      setSearchError('')
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
              />
            </div>
            <button type='submit' className='search-icon bg-transparent'>
              <img src={Icons.Search} alt='Search icon' />
            </button>
            <span className='search-error-text'>{searchError}</span>
          </div>
        </form>
      </div>
      <div className='searchbar-bottom'></div>
    </SearchBarWrapper>
  )
}
