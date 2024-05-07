import styled from 'styled-components'

import { theme } from '../../../styles/theme/theme'

export const SectionTitleWrapper = styled.div`
  margin-bottom: 40px;

  @media (max-width: ${theme.breakpoints.lg}) {
    margin-bottom: 30px;
  }
  @media (max-width: ${theme.breakpoints.xs}) {
    margin-bottom: 20px;
  }

  .title-grid {
    gap: 20px;

    .title-left {
      max-width: 992px;
      margin-right: auto;
    }
  }
`
