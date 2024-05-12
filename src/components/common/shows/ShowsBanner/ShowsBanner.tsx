import type { FC } from 'react'
import { BaseLinkPrimary } from '../../../../styles/components/Button'
import { Container, HeadingTitle } from '../../../../styles/global/default'
import { ShowsBannerWrapper } from './ShowsBanner.styles'

interface IShowsBanner {
  showData: ShowsData_Interface
}

export const ShowsBanner: FC<IShowsBanner> = ({ showData }) => {
  return (
    <ShowsBannerWrapper className='top-spacing-fix'>
      <Container>
        <div className='banner-img flex justify-center items-end'>
          <div className='banner-content text-center'>
            <HeadingTitle className='banner-title'>
              {showData.name}
            </HeadingTitle>
            <div
              className='summary-text'
              dangerouslySetInnerHTML={{
                __html: showData?.summary?.substring(0, 240) + ' ...'
              }}
            ></div>
            <div className='banner-info flex flex-col items-center'>
              <BaseLinkPrimary
                to={showData?.officialSite || ''}
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='btn-text'>Visit Official Site</span>
              </BaseLinkPrimary>
            </div>
          </div>
        </div>
      </Container>
    </ShowsBannerWrapper>
  )
}
