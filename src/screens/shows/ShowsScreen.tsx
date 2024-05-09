import type { FC } from 'react'
import { useSelector } from 'react-redux'
import { Spinner } from '../../components'
import { selectShowsData } from '../../redux/slices/showsSlice'

export const ShowsScreen: FC = () => {
  const { isLoading } = useSelector(selectShowsData)

  if (isLoading.fetchAllShows) {
    return <Spinner />
  }

  return <div className='pg-shows'></div>
}
