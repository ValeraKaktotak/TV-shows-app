import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { Icons } from '../../../../assets/icons'
import { GenreItemWrapper } from './GenreItem.styles'

interface GenreItemInterface {
  data: GENRES_Interface
  key?: string
}

export const GenreItem: FC<GenreItemInterface> = ({ data }) => {
  const { id, name, thumbnail } = data
  return (
    <GenreItemWrapper>
      <div className='item-content'>
        <div className='item-img'>
          <img src={thumbnail} alt='Genre Icon' />
        </div>
        <div className='item-body flex items-center justify-between'>
          <div className='item-title font-semibold'>{name}</div>
        </div>
        <Link to='/' className='item-arrow-link'>
          <img src={Icons.ArrowRight} alt='Arrow right' />
        </Link>
      </div>
    </GenreItemWrapper>
  )
}
