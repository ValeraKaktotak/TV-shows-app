import styled from 'styled-components'
import { theme } from '../../styles/theme/theme'

export const FooterWrapper = styled.footer`
  padding: 60px 0;

  @media (max-width: ${theme.breakpoints.xl}) {
    padding: 40px 0;
  }
  @media (max-width: ${theme.breakpoints.lg}) {
    padding: 30px 0;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 20px 0;
  }

  .footer-top {
    margin-bottom: 60px;

    @media (max-width: ${theme.breakpoints.lg}) {
      margin-bottom: 40px;
    }

    .footer-list {
      grid-template-columns: repeat(6, 1fr);
      gap: 20px;

      @media (max-width: ${theme.breakpoints.xl}) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media (max-width: ${theme.breakpoints.sm}) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (max-width: ${theme.breakpoints.xs}) {
        grid-template-columns: 100%;
        text-align: center;
      }
    }
  }

  .footer-bottom {
    column-gap: 40px;
    row-gap: 16px;
    padding-top: 24px;
    border-top: 1px solid ${theme.colors.black15};

    @media (max-width: ${theme.breakpoints.lg}) {
      flex-direction: column;
    }

    .bottom-links {
      @media (max-width: ${theme.breakpoints.sm}) {
        justify-content: center;
      }

      .bottom-link {
        padding: 0 20px;
        display: inline-flex;
        justify-content: center;
        border-right: 1px solid ${theme.colors.black15};

        @media (max-width: ${theme.breakpoints.sm}) {
          padding: 0 12px;
        }
      }
      li {
        &:last-child {
          .bottom-link {
            border-right: 0;
            padding-right: 0;
          }
        }
        &:first-child {
          .bottom-link {
            @media (max-width: ${theme.breakpoints.lg}) {
              padding-left: 0;
            }
          }
        }
      }
    }
  }
`
export const FooterItemWrapper = styled.div``
