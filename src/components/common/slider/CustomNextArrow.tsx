import type { FC } from 'react'
import { Icons } from '../../../assets/icons'

interface CustomNextArrowProps {
  onClick?: React.MouseEventHandler
}

export const CustomNextArrow: FC<CustomNextArrowProps> = ({ onClick }) => {
  return (
    <button
      className='custom-next-arrow bg-black06 flex items-center justify-center'
      onClick={onClick}
    >
      <img src={Icons.ArrowRight} alt='Right arrow' />
    </button>
  )
}
