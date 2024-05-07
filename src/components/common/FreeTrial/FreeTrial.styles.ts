import styled from 'styled-components'

import { Images } from '../../../assets/images'
import { theme } from '../../../styles/theme/theme'

export const FreeTrialWrapper = styled.section`
  .free-trial-content {
    column-gap: 40px;
    row-gap: 20px;
    border-radius: 20px;
    border: 1px solid #262626;
    padding: 100px 40px;
    background: url(${Images.TrialBanner});

    @media (max-width: ${theme.breakpoints.xl}) {
      padding: 60px 30px;
    }
    @media (max-width: ${theme.breakpoints.lg}) {
      padding: 40px 24px;
    }
    @media (max-width: ${theme.breakpoints.sm}) {
      padding: 20px 16px;
    }
  }
`
