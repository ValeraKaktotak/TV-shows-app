import { type FC } from 'react'
import { Banner, Genre } from '../../components'
import { CommonQuestions } from '../../components/home/CommonQuestions/CommonQuestions'
import { StreamDevices } from '../../components/home/StreamDevices/StreamDevices'
//import { scrollToTop } from '../../utilities/scrollToTop'

export const HomeScreen: FC = () => {
  //useEffect(() => scrollToTop(), [])

  return (
    <div className='pg-home'>
      <Banner />
      <Genre />
      <StreamDevices />
      <CommonQuestions />
    </div>
  )
}
