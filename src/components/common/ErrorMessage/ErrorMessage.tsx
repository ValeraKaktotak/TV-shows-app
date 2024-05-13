import type { FC } from 'react'
import { Images } from '../../../assets/images'
import { ERROR_TYPES } from '../../../constant/errorConstants'
import { Container, HeadingTitleMd } from '../../../styles/global/default'
import { ErrorMessageWrapper } from './ErrorMessage.styles'

interface IErrorMessage {
  error: SHOWS_SLICE_ERROR_Interface
}

export const ErrorMessage: FC<IErrorMessage> = ({ error }) => {
  console.log(error)

  const displayErrorImage = () => {
    if (error?.code === ERROR_TYPES.ERR_404) {
      return <img className='error-img' src={Images.Error404} alt='Error 404' />
    } else if (error?.code === ERROR_TYPES.ERR_429) {
      return <img className='error-img' src={Images.Error429} alt='Error 429' />
    }
    return (
      <img className='error-img' src={Images.ErrorNoData} alt='Error no data' />
    )
  }

  return (
    <ErrorMessageWrapper className='text-center top-spacing-fix'>
      <Container>
        <div className='error-content flex flex-col justify-between items-center'>
          {displayErrorImage()}
        </div>
        <HeadingTitleMd className='error-title'>
          {error?.message}
        </HeadingTitleMd>
      </Container>
    </ErrorMessageWrapper>
  )
}
