import type { FC } from 'react'
import { SectionTitle } from '../../SectionTitle/SectionTitle'
import { ShowsSliderWrapper } from './ShowsSlider.styles'

interface IShowsSlider {
  sliderType: any
  sliderTitle: any
  showsData: any
}

export const ShowsSlider: FC<IShowsSlider> = ({
  sliderType,
  sliderTitle,
  showsData
}) => {
  return (
    <ShowsSliderWrapper>
      <SectionTitle title={sliderTitle} />
    </ShowsSliderWrapper>
  )
}
