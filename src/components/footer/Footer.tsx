import type { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { FOOTER_LINKS } from '../../constant/mockData'
import { Container, Paragraph, Text } from '../../styles/global/default'

import { FooterItem } from './FooterItem/FooterItem'
import { FooterWrapper } from './Footer.styles'

export const Footer: FC = () => {
  const currentYear = new Date()
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
        <div className='footer-bottom flex items-center justify-between'>
          <Paragraph className='copyright-text'>
            &copy; {currentYear.getFullYear()} Stream Vibe. All Rights Reserved.
          </Paragraph>
          <ul className='flex items-center flex-wrap bottom-links'>
            <li>
              <NavLink to='/' className='bottom-link'>
                <Text>Terms of use</Text>
              </NavLink>
            </li>
            <li>
              <NavLink to='/' className='bottom-link'>
                <Text>Privacy Policy</Text>
              </NavLink>
            </li>
            <li>
              <NavLink to='/' className='bottom-link'>
                <Text>Cookie Policy</Text>
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </FooterWrapper>
  )
}
