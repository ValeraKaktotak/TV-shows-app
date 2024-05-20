import styled from 'styled-components'
import { theme } from '../../../styles/theme/theme'

export const ShowMainDataWrapper = styled.div`
  width: 70%;

  @media (max-width: ${theme.breakpoints.xl}) {
    width: 100%;
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

  .detail-block-title {
    margin-bottom: 16px;
  }
`
