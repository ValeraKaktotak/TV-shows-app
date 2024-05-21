import { useEffect, type FC } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  ErrorMessage,
  FreeTrial,
  ShowsBanner,
  ShowsList,
  ShowsSlider,
  Spinner
} from '../../components'
import { GENRES_TYPES } from '../../constant/commonConstans'
import { GENRES } from '../../constant/mockData'
import { SHOWS_TYPES } from '../../constant/showsConstants'
import {
  selectShows,
  selectSortedHighRatedShows,
  selectSortedNewShows
} from '../../redux/selectors/showsSelector'
import {
  fetchAllShows,
  fetchAllShowsByGenre
} from '../../redux/slices/showsSlice'
import { RootState, useAppDispatch } from '../../redux/store'
import { scrollToTop } from '../../utilities/scrollToTop'

export const ShowsScreen: FC = () => {
  const { genre } = useParams()
  const isGenre = GENRES.some((item) => item.name === genre)
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
    if (isGenre) {
      dispatch(fetchAllShowsByGenre(genre as GENRES_TYPES))
    } else dispatch(fetchAllShows())
  }, [dispatch, genre, isGenre])

  useEffect(() => scrollToTop(), [])

  if (isLoading) {
    return <Spinner />
  }
  if (isError) {
    return <ErrorMessage error={error as SHOWS_SLICE_ERROR_Interface} />
  }

  return (
    <div className='pg-shows'>
      {highRatedShowsData?.length > 0 && (
        <ShowsBanner
          showData={highRatedShowsData[Math.floor(Math.random() * 10)]}
        />
      )}
      {highRatedShowsData?.length > 0 && (
        <ShowsSlider
          sliderType={SHOWS_TYPES.HIGH_RATED_SHOWS}
          sliderTitle={'All Time Popular Shows'}
          showsData={highRatedShowsData}
        />
      )}
      {latestPremieredShowsData?.length > 0 && (
        <ShowsSlider
          sliderType={SHOWS_TYPES.NEW_SHOWS}
          sliderTitle={'New Shows to Watch'}
          showsData={latestPremieredShowsData}
        />
      )}
      {allShowsData?.length > 0 && (
        <ShowsList showsData={allShowsData} showsTitle={'All Shows'} />
      )}

      <FreeTrial />
    </div>
  )
}
