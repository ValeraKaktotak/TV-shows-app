import { useEffect, type FC } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  ErrorMessage,
  FreeTrial,
  ShowMainData,
  ShowMetaData,
  ShowsBanner,
  Spinner
} from '../../components'
import {
  selectShowMetadata,
  selectSingleShowDetails
} from '../../redux/selectors/showsSelector'
import { fetchSingleShow } from '../../redux/slices/showsSlice'
import { RootState, useAppDispatch } from '../../redux/store'
import { Container } from '../../styles/global/default'
import { scrollToTop } from '../../utilities/scrollToTop'
import { ShowDetailScreenWrapper } from './ShowDetailScreen.styles'

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

  const showMetaData = useSelector(selectShowMetadata)

  useEffect(() => scrollToTop(), [])
  useEffect(() => {
    dispatch(fetchSingleShow(id!))
  }, [dispatch, id])

  if (isLoading) return <Spinner />
  if (isError) return <ErrorMessage error={error} />

  return (
    <div className='pg-show-detail'>
      {showDetailsData && <ShowsBanner showData={showDetailsData} />}
      <Container>
        {showDetailsData && (
          <ShowDetailScreenWrapper>
            <ShowMainData />
            <ShowMetaData metaData={showMetaData} />
          </ShowDetailScreenWrapper>
        )}
      </Container>
      <FreeTrial />
    </div>
  )
}
