import type { FC } from 'react'
import { Icons } from '../../../assets/icons'
import routeConstants from '../../../constant/routeConstants'
import { BaseLinkPrimary } from '../../../styles/components/Button'
import {
  Container,
  HeadingBanner,
  Paragraph
} from '../../../styles/global/default'
import { BannerWrapper } from './Banner.style'

export const Banner: FC = () => {
  return (
    <BannerWrapper>
      <div className='banner-img flex items-center justify-center'>
        <img className='banner-icon' src={Icons.Streamvibe} alt='Banner img' />
      </div>
      <Container className='text-center'>
        <div className='banner-content mx-auto'>
          <HeadingBanner>The Best Streaming Experience</HeadingBanner>
          <Paragraph className='banner-text text-lg'>
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch.
          </Paragraph>
          <BaseLinkPrimary to={routeConstants.SHOWS}>
            <span className='btn-icon'>
              <img src={Icons.Play} alt='Play icon' />
            </span>
            <span className='btn-text'>Start Watching Now</span>
          </BaseLinkPrimary>
        </div>
      </Container>
    </BannerWrapper>
  )
}
