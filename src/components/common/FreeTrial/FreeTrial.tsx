import type { FC } from 'react'

import { BaseLinkPrimary } from '../../../styles/components/Button'
import {
  Container,
  HeadingTitle,
  Paragraph
} from '../../../styles/global/default'

import { FreeTrialWrapper } from './FreeTrial.styles'

export const FreeTrial: FC = () => {
  return (
    <FreeTrialWrapper className='section-py'>
      <Container>
        <div className='free-trial-content bg-black06 flex items-center justify-between flex-wrap'>
          <div>
            <HeadingTitle>Start your free trial today!</HeadingTitle>
            <Paragraph>
              This is a clear and concise call to action that encourages users
              to sign up for a free trial of StreamVibe.
            </Paragraph>
          </div>
          <BaseLinkPrimary to='#'>Start a Free Trial</BaseLinkPrimary>
        </div>
      </Container>
    </FreeTrialWrapper>
  )
}
