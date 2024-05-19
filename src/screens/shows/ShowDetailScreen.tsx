import { useEffect, type FC } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ShowsBanner, Spinner } from '../../components'
import { selectSingleShowDetails } from '../../redux/selectors/showsSelector'
import { fetchSingleShow } from '../../redux/slices/showsSlice'
import { RootState, useAppDispatch } from '../../redux/store'
import { scrollToTop } from '../../utilities/scrollToTop'

export const ShowDetailScreen: FC = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()

  const showDetailsData = useSelector(selectSingleShowDetails)
  const isLoading = useSelector(
    (state: RootState) => state?.shows?.isLoading?.fetchSingleShow
  )
  const isError = useSelector(
    (state: RootState) => state?.shows?.isError?.fetchSingleShow
  )
  const error = useSelector((state: RootState) => state?.shows?.error)

  useEffect(() => scrollToTop(), [])
  useEffect(() => {
    dispatch(fetchSingleShow(id!))
  }, [dispatch, id])

  if (isLoading) return <Spinner />

  return (
    <div className='pg-show-detail'>
      {showDetailsData && <ShowsBanner showData={showDetailsData} />}
    </div>
  )
}
