import type { FC } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Slider from 'react-slick'

import { selectShowCast } from '../../../redux/selectors/showsSelector'
import { CustomNextArrow } from '../../common/slider/CustomNextArrow'
import { CustomPrevArrow } from '../../common/slider/CustomPrevArrow'
import { SliderWrapper } from '../../common/slider/Slider.styles'

import { ShowCastWrapper } from './ShowCast.styles'

export const ShowCast: FC = () => {
  const castData = useSelector(selectShowCast)

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    slidesToScroll: 1
  }

  return (
    <ShowCastWrapper className='detail-block show-cast'>
      <h4 className='detail-block-title'>Cast</h4>
      <SliderWrapper>
        {castData && (
          <Slider
            {...settings}
            nextArrow={<CustomNextArrow />}
            prevArrow={<CustomPrevArrow />}
          >
            {castData?.map((cast) => (
              <div className='show-cast-item' key={cast.person.id}>
                <NavLink
                  to={cast?.person?.url || '#'}
                  className='item-content'
                  target='_blank'
                >
                  <img
                    src={cast?.person?.image?.medium}
                    alt=''
                    className='object-fit-cover'
                  />
                </NavLink>
              </div>
            ))}
          </Slider>
        )}
      </SliderWrapper>
    </ShowCastWrapper>
  )
}
