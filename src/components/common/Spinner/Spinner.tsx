import type { FC } from 'react'

import { SpinnerWrapper } from './Spinner.styles'

export const Spinner: FC = () => {
  return (
    <SpinnerWrapper>
      <div className='sk-chase'>
        <div className='sk-chase-dot'></div>
        <div className='sk-chase-dot'></div>
        <div className='sk-chase-dot'></div>
        <div className='sk-chase-dot'></div>
        <div className='sk-chase-dot'></div>
        <div className='sk-chase-dot'></div>
      </div>
    </SpinnerWrapper>
  )
}
