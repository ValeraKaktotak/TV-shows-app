import type { FC } from 'react'

import { EpisodeItem } from '../EpisodeItem/EpisodeItem'

import { EpisodeListWrapper } from './EpisodeList.styles'

interface IEpisodeList {
  seasonNo: number
  episodeData: Episode[]
}

export const EpisodeList: FC<IEpisodeList> = ({ episodeData, seasonNo }) => {
  const filteredEpisodes = episodeData.filter(
    (episode) => episode.season === seasonNo
  )

  return (
    <EpisodeListWrapper className='grid'>
      {filteredEpisodes.map((episode) => (
        <EpisodeItem
          key={episode.id}
          seasonNo={seasonNo}
          episodeData={episode}
        />
      ))}
    </EpisodeListWrapper>
  )
}
