import styled from 'styled-components'
import { theme } from '../../../styles/theme/theme'

export const SeasonListWrapper = styled.div`
  padding: 30px 0;

  @media (max-width: ${theme.breakpoints.lg}) {
    padding: 20px 0;
  }
`
