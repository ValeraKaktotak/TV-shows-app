import type { FC } from 'react'
import { useSelector } from 'react-redux'
import { ErrorMessage, Spinner } from '../../components'
import { selectShowsData } from '../../redux/slices/showsSlice'

export const ShowsScreen: FC = () => {
  const { isLoading, isError } = useSelector(selectShowsData)

  if (isLoading.fetchAllShows) {
    return <Spinner />
  }
  if (isError.fetchAllShows) {
    return <ErrorMessage />
  }

  return <div className='pg-shows'></div>
}
