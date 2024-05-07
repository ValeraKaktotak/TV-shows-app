import type { FC } from 'react'

import { RIGHT_CONTENT_TYPE } from '../../../constant/commonConstans'
import { BaseLinkPrimary } from '../../../styles/components/Button'
import {
  Container,
  HeadingTitle,
  Paragraph
} from '../../../styles/global/default'

import { SectionTitleWrapper } from './SectionTitle.styles'

interface ISectionTitle {
  title: string
  text: string
  rightContentType?: RIGHT_CONTENT_TYPE.TITLE_BUTTON
}

export const SectionTitle: FC<ISectionTitle> = ({
  title,
  text,
  rightContentType
}) => {
  return (
    <SectionTitleWrapper>
      <Container>
        <div className='title-grid flex item-center justify-between'>
          <div className='title-left'>
            <HeadingTitle>{title}</HeadingTitle>
            <Paragraph>{text}</Paragraph>
            <div className='title-right'>
              {rightContentType === 'title-button' && (
                <BaseLinkPrimary to='/'>
                  <span className='btn-text'>Ask a Question</span>
                </BaseLinkPrimary>
              )}
            </div>
          </div>
        </div>
      </Container>
    </SectionTitleWrapper>
  )
}
