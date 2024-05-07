import type { FC } from 'react'

import { RIGHT_CONTENT_TYPE } from '../../../constant/commonConstans'
import { FAQS } from '../../../constant/mockData'
import { Container } from '../../../styles/global/default'
import { SectionTitle } from '../../common/SectionTitle/SectionTitle'

import { CommonQuestionItem } from './CommonQuestionItem'
import { CommonQuestionsWrapper } from './CommonQuestions.styles'

export const CommonQuestions: FC = () => {
  const halfValue = Math.ceil(FAQS.length / 2)
  return (
    <CommonQuestionsWrapper className='section-py'>
      <SectionTitle
        title={'Frequently Asked Questions'}
        text={
          "Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
        }
        rightContentType={RIGHT_CONTENT_TYPE.TITLE_BUTTON}
      />
      <Container>
        <div className='common-q-content'>
          <div className='common-q-list grid'>
            {/* first half of faq */}
            <div className='q-list-one'>
              {FAQS?.slice(0, halfValue)?.map((faq, index) => {
                const tempIndex = index + 1
                return (
                  <CommonQuestionItem
                    data={faq}
                    key={faq.id}
                    count={tempIndex}
                  />
                )
              })}
            </div>
            {/* second half of faq */}
            <div className='q-list-two'>
              {FAQS?.slice(halfValue)?.map((faq, index) => {
                const tempIndex = halfValue + (index + 1)
                return (
                  <CommonQuestionItem
                    data={faq}
                    key={faq.id}
                    count={tempIndex}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </CommonQuestionsWrapper>
  )
}
