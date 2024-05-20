import type { FC } from 'react'
import { useSelector } from 'react-redux'
import { selectShowDescription } from '../../../redux/selectors/showsSelector'
import { Paragraph } from '../../../styles/global/default'
import { SeasonList } from '../SeasonList/SeasonList'
import { ShowMainDataWrapper } from './ShowMainData.styles'

export const ShowMainData: FC = () => {
  const descriptionData = useSelector(selectShowDescription)

  return (
    <ShowMainDataWrapper>
      <SeasonList />
      <div className='detail-block show-description'>
        <h4 className='detail-block-title'>Description</h4>
        <Paragraph
          className='text-white'
          dangerouslySetInnerHTML={{ __html: descriptionData! }}
        ></Paragraph>
      </div>
    </ShowMainDataWrapper>
  )
}
