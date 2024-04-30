import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { Text } from '../../../styles/global/default'
import { FooterItemWrapper } from '../Footer.styles'

interface FooterItemInterface {
  data: FOOTER_LINKS_Interface
  key?: string
}

export const FooterItem: FC<FooterItemInterface> = ({ data }) => {
  const { id, link_title, link_type, links } = data
  return (
    <FooterItemWrapper>
      <h4 className='item-title text-xl capitalize font-semibold'>
        {link_title}
      </h4>
      {data.link_type === 'text' ? (
        <ul className='item-text-links'>
          {data.links.map((link, index) => (
            <li key={index}>
              <Link to={link.link_url}>
                <Text className='capitalize font-medium'>{link.link_name}</Text>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <ul className='item-icons-links flex item-center'>
          {data.links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.link_url}
                className='item-icon-link bg-black-10 inline-flex items-center justify-center'
              >
                <img src={link.link_icon} alt='Icon' />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </FooterItemWrapper>
  )
}
