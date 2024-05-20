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

  .detail-block {
    padding: 40px;
    background: ${theme.colors.black10};
    border: 1px solid ${theme.colors.black15};
    border-radius: 12px;
    margin-bottom: 30px;

    &:last-child {
      margin-bottom: 0;
    }

    @media (max-width: ${theme.breakpoints.xxl}) {
      padding: 30px;
    }
    @media (max-width: ${theme.breakpoints.xl}) {
      padding: 20px;
    }
    @media (max-width: ${theme.breakpoints.lg}) {
      padding: 16px;
    }
    @media (max-width: ${theme.breakpoints.sm}) {
      padding: 12px;
    }
  }
`
