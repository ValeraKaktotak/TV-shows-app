import { useEffect, type FC } from 'react'
import { Banner } from '../../components'
import { scrollToTop } from '../../utilities/scrollToTop'

export const HomeScreen: FC = () => {
  useEffect(() => scrollToTop(), [])

  return (
    <div className='pg-home'>
      <Banner />
    </div>
  )
}
