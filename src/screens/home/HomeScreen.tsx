import { useEffect, type FC } from 'react'
import { scrollToTop } from '../../utilities/scrollToTop'

export const HomeScreen: FC = () => {
  useEffect(() => scrollToTop(), [])

  return <div>HomeScreen</div>
}
