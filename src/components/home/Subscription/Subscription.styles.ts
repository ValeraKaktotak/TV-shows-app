import styled from 'styled-components'
import { theme } from '../../../styles/theme/theme'

export const SubscriptionWrapper = styled.section`
  .subs-list {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    @media (max-width: ${theme.breakpoints.lg}) {
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }
    @media (max-width: ${theme.breakpoints.sm}) {
      grid-template-columns: 100%;
    }
  }
`

export const SubscriptionItemWrapper = styled.div`
  border-radius: 12px;
  padding: 32px;
  border: 1px solid ${theme.colors.black15};

  @media (max-width: ${theme.breakpoints.xl}) {
    padding: 28px;

    .btn-text {
      font-size: 16px;
    }
  }
  @media (max-width: ${theme.breakpoints.lg}) {
    padding: 24px;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 16px;
  }

  .item-price {
    margin: 24px 0 32px;

    @media (max-width: ${theme.breakpoints.lg}) {
      margin: 24px 0;
    }

    &-text {
      font-size: 40px;

      @media (max-width: ${theme.breakpoints.lg}) {
        font-size: 24px;
      }
    }
  }

  .item-btn-group {
    gap: 12px;

    .item-btn {
      flex: 1;
    }
  }
`
