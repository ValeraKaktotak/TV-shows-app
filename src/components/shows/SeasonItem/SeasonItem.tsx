import { type FC,useState } from 'react'
import { useSelector } from 'react-redux'

import { Icons } from '../../../assets/icons'
import { selectShowEpisodes } from '../../../redux/selectors/showsSelector'
import { HeadingTitleMd, Text } from '../../../styles/global/default'
import { EpisodeList } from '../EpisodeList/EpisodeList'

import { SeasonItemWrapper } from './SeasonItem.styles'

interface ISeasonItem {
  seasonData: Season
}

export const SeasonItem: FC<ISeasonItem> = ({ seasonData }) => {
  const [isCollapse, setIsCollapse] = useState<boolean>(true)
  const episodesData = useSelector(selectShowEpisodes)

  const handleAccordion = () => {
    setIsCollapse(!isCollapse)
  }

  return (
    <SeasonItemWrapper className='bg-black06'>
      <div className='season-head flex items-center justify-between'>
        <div className='season-head-title flex items-center flex-wrap'>
          <HeadingTitleMd>Season {seasonData?.number}</HeadingTitleMd>
          <Text>
            {seasonData?.episodeOrder ? seasonData.episodeOrder : 'N/A'}{' '}
            Episodes
          </Text>
        </div>
        <button
          className='season-head-btn inline-flex items-center justify-center'
          onClick={handleAccordion}
        >
          <img src={Icons.ArrowDownGrey} alt='Arrow Down' />
        </button>
      </div>
      <div className={`season-body ${!isCollapse ? 'show' : ''}`}>
        {episodesData && (
          <EpisodeList
            episodeData={episodesData}
            seasonNo={seasonData.number}
          />
        )}
      </div>
    </SeasonItemWrapper>
  )
}
