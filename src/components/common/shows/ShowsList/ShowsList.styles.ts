import styled from 'styled-components'
import { theme } from '../../../../styles/theme/theme'

export const PaginationWrapper = styled.div``

export const ShowsListWrapper = styled.div`
  .shows-list {
    grid-template-columns: repeat(5, 1fr);
    row-gap: 20px;

    @media (max-width: ${theme.breakpoints.xxl}) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: ${theme.breakpoints.xl}) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: ${theme.breakpoints.lg}) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: ${theme.breakpoints.sm}) {
      grid-template-columns: 100%;
    }
  }
`
