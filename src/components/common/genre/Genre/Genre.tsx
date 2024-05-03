import type { FC } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { GENRES } from '../../../../constant/mockData'
import { Container } from '../../../../styles/global/default'
import { SectionTitle } from '../../SectionTitle/SectionTitle'
import { GenreItem } from '../GenreItem/GenreItem'
import { GenreWrapper } from './Genre.styles'

export const Genre: FC = () => {
  const settings = {}
  return (
    <GenreWrapper>
      <SectionTitle
        title={'Explore our wide variety of categories'}
        text={
          "Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new."
        }
      />
      <Container>
        <Slider {...settings}>
          {GENRES.map((genre) => (
            <GenreItem key={genre.id} data={genre} />
          ))}
        </Slider>
      </Container>
    </GenreWrapper>
  )
}
