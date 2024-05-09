import { useEffect, type FC } from 'react'

import {
  Banner,
  CommonQuestions,
  FreeTrial,
  Genre,
  StreamDevices,
  Subscription
} from '../../components'
import { scrollToTop } from '../../utilities/scrollToTop'

export const HomeScreen: FC = () => {
  useEffect(() => scrollToTop(), [])

  return (
    <div className='pg-home'>
      <Banner />
      <Genre />
      <StreamDevices />
      <CommonQuestions />
      <Subscription />
      <FreeTrial />
    </div>
  )
}
