import type { FC } from 'react'
import { useSelector } from 'react-redux'
import { Icons } from '../../../assets/icons'
import { selectShowMetadata } from '../../../redux/selectors/showsSelector'
import { Paragraph } from '../../../styles/global/default'
import { ShowMetaDataWrapper } from './ShowMetaData.styles'

export const ShowMetaData: FC = () => {
  const metaData = useSelector(selectShowMetadata)

  return (
    <ShowMetaDataWrapper>
      <div className='detail-block'>
        <div className='detail-block-item'>
          <Paragraph className='block-item-title flex items-center justify-start'>
            <span className='title-icon'>
              <img src={Icons.CalendarGrey} alt='Calendar' />
            </span>
            <span className='title-text'>Released Date</span>
          </Paragraph>
          <div className='block-item-body'>
            <div className='block-item-pill text-md'>{metaData?.premiered}</div>
          </div>
        </div>
        <div className='detail-block-item'>
          <Paragraph className='block-item-title flex items-center justify-start'>
            <span className='title-icon'>
              <img src={Icons.LanguageGrey} alt='Language' />
            </span>
            <span className='title-text'>Available Language</span>
          </Paragraph>
          <div className='block-item-body'>
            <div className='block-item-pill text-md'>{metaData?.language}</div>
          </div>
        </div>
        <div className='detail-block-item'>
          <Paragraph className='block-item-title flex items-center justify-start'>
            <span className='title-icon'>
              <img src={Icons.StarGrey} alt='Stars' />
            </span>
            <span className='title-text'>Ratings</span>
          </Paragraph>
          <div className='block-item-body'>
            <div className='block-item-pill text-md'>
              {metaData?.rating?.average || 0} / 10
            </div>
          </div>
        </div>
        <div className='detail-block-item'>
          <Paragraph className='block-item-title flex items-center justify-start'>
            <span className='title-icon'>
              <img src={Icons.GridGrey} alt='Grid' />
            </span>
            <span className='title-text'>Genres</span>
          </Paragraph>
          <div className='block-item-body flex items-center flex-wrap'>
            {metaData?.genres?.map((genre, index) => (
              <div className='block-item-pill text-md' key={index}>
                {genre + ' '}
              </div>
            ))}
          </div>
        </div>
      </div>
    </ShowMetaDataWrapper>
  )
}
