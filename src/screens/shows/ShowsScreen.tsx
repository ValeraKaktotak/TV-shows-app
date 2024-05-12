import { useEffect, type FC } from 'react'
import { useSelector } from 'react-redux'
import { ErrorMessage, ShowsBanner, ShowsList, Spinner } from '../../components'
import {
  selectShows,
  selectSortedHighRatedShows,
  selectSortedNewShows
} from '../../redux/selectors/showsSelector'
import { fetchAllShows } from '../../redux/slices/showsSlice'
import { RootState, useAppDispatch } from '../../redux/store'
import { scrollToTop } from '../../utilities/scrollToTop'

export const ShowsScreen: FC = () => {
  const dispatch = useAppDispatch()

  const allShowsData = useSelector(selectShows)
  const highRatedShowsData = useSelector(selectSortedHighRatedShows)
  const latestPremieredShowsData = useSelector(selectSortedNewShows)

  const isLoading = useSelector(
    (state: RootState) => state.shows.isLoading.fetchAllShows
  )
  const isError = useSelector(
    (state: RootState) => state.shows.isError.fetchAllShows
  )
  const error = useSelector((state: RootState) => state.shows.error)

  useEffect(() => {
    dispatch(fetchAllShows())
  }, [dispatch])

  useEffect(() => scrollToTop(), [])

  if (isLoading) {
    return <Spinner />
  }
  if (isError) {
    return <ErrorMessage />
  }

  return (
    <div className='pg-shows'>
      {highRatedShowsData?.length > 0 && (
        <ShowsBanner
          showData={highRatedShowsData[Math.floor(Math.random() * 10)]}
        />
      )}
      {allShowsData?.length > 0 && (
        <ShowsList showsData={allShowsData} showsTitle={'All Shows'} />
      )}
    </div>
  )
}
