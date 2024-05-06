import { useState, type FC } from 'react'
import { Icons } from '../../../assets/icons'
import { Paragraph } from '../../../styles/global/default'
import { CommonQuestionsItemWrapper } from './CommonQuestions.styles'

interface ICommonQuestionItem {
  data: FAQS_Interface
  count: number
}

export const CommonQuestionItem: FC<ICommonQuestionItem> = ({
  data,
  count
}) => {
  const tempIndex = count < 10 ? `0${count}` : count
  const [isCollapsed, setCollapsed] = useState(true)

  const handleAccordion = () => {
    setCollapsed(!isCollapsed)
  }

  return (
    <CommonQuestionsItemWrapper className='item'>
      <div className='item-grid grid'>
        <div className='item-sn bg-black12 text-white flex items-center justify-center text-xl font-semibold'>
          {tempIndex}
        </div>
        <div className='item-body'>
          <div
            className='item-head flex justify-between items-start'
            onClick={handleAccordion}
          >
            <h4 className='item-title text-xl'>{data.question}</h4>
            <button className='item-btn bg-transparent'>
              {isCollapsed ? (
                <img src={Icons.Plus} alt='Plus' />
              ) : (
                <img src={Icons.Minus} alt='Minus' />
              )}
            </button>
          </div>
          <div className={`item-text ${!isCollapsed ? 'show' : ''}`}>
            <Paragraph>{data.answer}</Paragraph>
          </div>
        </div>
      </div>
    </CommonQuestionsItemWrapper>
  )
}
