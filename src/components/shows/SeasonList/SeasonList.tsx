import type { FC } from 'react'
import { useSelector } from 'react-redux'

import { selectShowSeasons } from '../../../redux/selectors/showsSelector'
import { HeadingTitleMd } from '../../../styles/global/default'
import { SeasonItem } from '../SeasonItem/SeasonItem'

import { SeasonListWrapper } from './SeasonList.styles'

export const SeasonList: FC = () => {
  const seasonData = useSelector(selectShowSeasons)

  return (
    <SeasonListWrapper className='detail-block'>
      <HeadingTitleMd>Seasons and Episodes</HeadingTitleMd>
      {seasonData?.map((season) => (
        <SeasonItem key={season.id} seasonData={season} />
      ))}
    </SeasonListWrapper>
  )
}
