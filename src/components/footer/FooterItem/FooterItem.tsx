import type { FC } from 'react'
import { FooterItemWrapper } from '../Footer.styles'

interface FooterItemInterface {
  data: FOOTER_LINKS_Interface
  key?: string
}

export const FooterItem: FC<FooterItemInterface> = ({ data }) => {
  const { id, link_title, link_type, links } = data
  return <FooterItemWrapper>{link_title}</FooterItemWrapper>
}
