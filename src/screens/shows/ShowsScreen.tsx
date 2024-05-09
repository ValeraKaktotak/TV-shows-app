import { useEffect, type FC } from 'react'
import { useSelector } from 'react-redux'
import { ErrorMessage, ShowsList, Spinner } from '../../components'
import { selectShows } from '../../redux/selectors/showsSelector'
import { fetchAllShows } from '../../redux/slices/showsSlice'
import { RootState, useAppDispatch } from '../../redux/store'
import { scrollToTop } from '../../utilities/scrollToTop'

export const ShowsScreen: FC = () => {
  const dispatch = useAppDispatch()

  const allShowsData = useSelector(selectShows)

  const isLoading = useSelector(
    (state: RootState) => state.shows.isLoading.fetchAllShows
  )
  const isError = useSelector(
    (state: RootState) => state.shows.isError.fetchAllShows
  )

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
      {allShowsData?.length > 0 && <ShowsList showsData={allShowsData} />}
    </div>
  )
}
