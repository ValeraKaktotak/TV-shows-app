import styled from 'styled-components'
import { Images } from '../../../assets/images'
import { theme } from '../../../styles/theme/theme'

export const BannerWrapper = styled.section`
  .banner-img {
    background: url(${Images.HomeBanner}) center/cover no-repeat fixed;
    min-height: 68vh;

    @media (max-width: ${theme.breakpoints.sm}) {
      min-height: 50vh;
    }

    .banner-icon {
      width: 260px;
      margin-top: 100px;

      @media (max-width: ${theme.breakpoints.xl}) {
        width: 220px;
      }
      @media (max-width: ${theme.breakpoints.lg}) {
        width: 180px;
      }
      @media (max-width: ${theme.breakpoints.sm}) {
        width: 120px;
      }
    }
  }

  .banner-content {
    max-width: 1096px;
    padding-top: 20px;
    padding-bottom: 40px;

    @media (max-width: ${theme.breakpoints.sm}) {
      padding-bottom: 20px;
    }

    .banner-text {
      margin-bottom: 50px;

      @media (max-width: ${theme.breakpoints.lg}) {
        margin-bottom: 30px;
      }
      @media (max-width: ${theme.breakpoints.sm}) {
        margin-bottom: 20px;
      }
    }
  }
`
