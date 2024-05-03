/// <reference types="redux-persist" />

interface FOOTER_LINKS_Interface {
  id: string
  link_title: string
  link_type: string
  links: FOOTER_LINKS_Link[]
}
interface FOOTER_LINKS_Link {
  link_name: string
  link_url: string
  link_icon?: string
}

interface GENRES_Interface {
  id: string
  thumbnail: string
  name: string
}
