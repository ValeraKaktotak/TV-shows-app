import { type FC } from 'react'
import { Banner, Genre } from '../../components'
import { StreamDevices } from '../../components/home/StreamDevices/StreamDevices'

export const HomeScreen: FC = () => {
  // useEffect(() => scrollToTop(), [])

  return (
    <div className='pg-home'>
      <Banner />
      <Genre />
      <StreamDevices />
    </div>
  )
}
