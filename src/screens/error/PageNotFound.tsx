import type { FC } from 'react'

import { Images } from '../../assets/images'
import { HeadingTitleMd } from '../../styles/global/default'

import { PageNotFoundWrapper } from './PageNotFound.styles'

export const PageNotFound: FC = () => {
  return (
    <PageNotFoundWrapper className='flex items-center justify-center flex-col'>
      <div className='page-not-found-img'>
        <img src={Images.Error404} alt='Error 404' />
      </div>
      <HeadingTitleMd>Page Not Found !</HeadingTitleMd>
    </PageNotFoundWrapper>
  )
}
