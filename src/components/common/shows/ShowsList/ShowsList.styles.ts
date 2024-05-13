import styled from 'styled-components'
import { theme } from '../../../../styles/theme/theme'

export const PaginationWrapper = styled.div`
  margin-top: 40px;

  @media (max-width: ${theme.breakpoints.sm}) {
    column-gap: 8px;
  }

  .paginate-btn {
    width: 48px;
    height: 48px;
    border-radius: 0;
    border: 1px solid ${theme.colors.black15};
    background: ${theme.colors.secondary};

    &.active {
      background: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
    }

    &:disabled {
      opacity: 0.3;
      cursor: default;
    }
  }

  .paginate-prev,
  .paginate-next {
    border: none;
    img {
      width: 20px;
    }
  }
  ul {
    @media (max-width: ${theme.breakpoints.md}) {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`

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
