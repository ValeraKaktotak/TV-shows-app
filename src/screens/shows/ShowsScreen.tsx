import { useEffect, type FC } from 'react'
import { useSelector } from 'react-redux'
import { ErrorMessage, Spinner } from '../../components'
import { fetchAllShows, selectShowsData } from '../../redux/slices/showsSlice'
import { useAppDispatch } from '../../redux/store'
import { scrollToTop } from '../../utilities/scrollToTop'

export const ShowsScreen: FC = () => {
  const dispatch = useAppDispatch()
  const { isLoading, isError } = useSelector(selectShowsData)

  useEffect(() => {
    dispatch(fetchAllShows())
  }, [dispatch])

  useEffect(() => scrollToTop(), [])

  if (isLoading.fetchAllShows) {
    return <Spinner />
  }
  if (isError.fetchAllShows) {
    return <ErrorMessage />
  }

  return <div className='pg-shows'></div>
}
