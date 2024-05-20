import styled from 'styled-components'
import { theme } from '../../styles/theme/theme'

export const ShowDetailScreenWrapper = styled.div`
  display: flex;
  margin-top: 60px;
  column-gap: 20px;

  @media (max-width: ${theme.breakpoints.xl}) {
    flex-direction: column;
    margin-top: 40px;
  }
  @media (max-width: ${theme.breakpoints.lg}) {
    margin-top: 30px;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    margin-top: 20px;
  }
`
