import type { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { Images } from '../../../assets/images'

import { EpisodeItemWrapper } from './EpisodeItem.styles'

interface IEpisodeItem {
  seasonNo: number
  episodeData: Episode
}

export const EpisodeItem: FC<IEpisodeItem> = ({ episodeData }) => {
  return (
    <EpisodeItemWrapper>
      <div className='episode-num text-gray60 text-xl flex items-start'>
        {episodeData?.number < 10
          ? '0' + episodeData.number
          : episodeData.number}
      </div>
      <div className='episode-full grid'>
        <NavLink to={episodeData?.url} target='_blank' className='episode-img'>
          <img
            src={episodeData?.image?.medium || Images.NoImage}
            alt='Episode image'
            className='object-fit-cover'
          />
        </NavLink>
        <div className='episode-body'>
          <div className='episode-head'>
            <h4 className='episode-title text-xl'>{episodeData?.name}</h4>
            <p
              className='episode-summary text-gray60'
              dangerouslySetInnerHTML={{ __html: episodeData?.summary }}
            ></p>
          </div>
        </div>
      </div>
    </EpisodeItemWrapper>
  )
}
