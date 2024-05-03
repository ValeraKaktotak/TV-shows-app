import type { FC } from 'react'
import { Icons } from '../../../assets/icons'

interface CustomPrevArrowProps {
  onClick?: React.MouseEventHandler
}

export const CustomPrevArrow: FC<CustomPrevArrowProps> = ({ onClick }) => {
  return (
    <button
      className='custom-prev-arrow bg-black06 flex items-center justify-center'
      onClick={onClick}
    >
      <img src={Icons.ArrowLeft} alt='Left arrow' />
    </button>
  )
}
