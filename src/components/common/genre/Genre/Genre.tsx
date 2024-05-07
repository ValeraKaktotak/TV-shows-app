import { type FC } from 'react'
import Slider from 'react-slick'

import { GENRES } from '../../../../constant/mockData'
import { Container } from '../../../../styles/global/default'
import { SectionTitle } from '../../SectionTitle/SectionTitle'
import { CustomNextArrow } from '../../slider/CustomNextArrow'
import { CustomPrevArrow } from '../../slider/CustomPrevArrow'
import { SliderWrapper } from '../../slider/Slider.styles'
import { GenreItem } from '../GenreItem/GenreItem'

import { GenreWrapper } from './Genre.styles'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

export const Genre: FC = () => {
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
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }
  return (
    <GenreWrapper>
      <SectionTitle
        title={'Explore our wide variety of categories'}
        text={
          "Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new."
        }
      />
      <Container>
        <SliderWrapper>
          <Slider
            {...settings}
            nextArrow={<CustomNextArrow />}
            prevArrow={<CustomPrevArrow />}
          >
            {GENRES.map((genre) => (
              <GenreItem key={genre.id} data={genre} />
            ))}
          </Slider>
        </SliderWrapper>
      </Container>
    </GenreWrapper>
  )
}
