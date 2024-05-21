import type { FC } from 'react'
import Slider from 'react-slick'

import { SHOWS_TYPES } from '../../../../constant/showsConstants'
import { Container } from '../../../../styles/global/default'
import { SectionTitle } from '../../SectionTitle/SectionTitle'
import { CustomNextArrow } from '../../slider/CustomNextArrow'
import { CustomPrevArrow } from '../../slider/CustomPrevArrow'
import { SliderWrapper } from '../../slider/Slider.styles'
import { ShowsItem } from '../ShowsItem/ShowsItem'

import { ShowsSliderWrapper } from './ShowsSlider.styles'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

interface IShowsSlider {
  sliderType: SHOWS_TYPES
  sliderTitle: string
  showsData: ShowsData_Interface[]
}

export const ShowsSlider: FC<IShowsSlider> = ({
  sliderType,
  sliderTitle,
  showsData
}) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <ShowsSliderWrapper>
      <SectionTitle title={sliderTitle} />
      <Container>
        <SliderWrapper>
          <Slider
            {...settings}
            nextArrow={<CustomNextArrow />}
            prevArrow={<CustomPrevArrow />}
          >
            {showsData?.slice(0, 12)?.map((show) => {
              return (
                <ShowsItem
                  key={show.id}
                  itemData={show}
                  itemType={sliderType}
                />
              )
            })}
          </Slider>
        </SliderWrapper>
      </Container>
    </ShowsSliderWrapper>
  )
}
