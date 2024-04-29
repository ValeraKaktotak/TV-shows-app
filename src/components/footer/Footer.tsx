import type { FC } from 'react'
import { FOOTER_LINKS } from '../../constant/mockData'
import { Container } from '../../styles/global/default'
import { FooterWrapper } from './Footer.styles'
import { FooterItem } from './FooterItem/FooterItem'

export const Footer: FC = () => {
  return (
    <FooterWrapper>
      <Container>
        <div className='footer-top'>
          <div className='footer-list grid'>
            {FOOTER_LINKS?.map((footerLink: FOOTER_LINKS_Interface) => {
              return <FooterItem key={footerLink.id} data={footerLink} />
            })}
          </div>
        </div>
      </Container>
    </FooterWrapper>
  )
}
