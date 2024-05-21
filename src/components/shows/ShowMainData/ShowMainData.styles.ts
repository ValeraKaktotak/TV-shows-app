import styled from 'styled-components'

import { theme } from '../../../styles/theme/theme'

export const ShowMainDataWrapper = styled.div`
  width: 70%;

  @media (max-width: ${theme.breakpoints.xl}) {
    width: 100%;
  }

  .detail-block-title {
    margin-bottom: 16px;
  }
`
