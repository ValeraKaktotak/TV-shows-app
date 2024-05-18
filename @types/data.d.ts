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

interface FAQS_Interface {
  id: string
  question: string
  answer: string
}

interface SUBSCRIPTIONS_Interface {
  id: string
  plan: string
  description: string
  monthly_price: number
  yearly_price: number
}

type SHOWS_SLICE_ERROR_Interface = {
  code?: string
  message?: string
}

interface SHOWS_SLICE_STATE_Interface {
  shows: ShowsData_Interface[]
  searchResults: SearchShowsData_Interface[]
  singleShow: SingleShowData_Interface | null
  isLoading: {
    fetchAllShows: boolean
    fetchSearchResult: boolean
  }
  isError: {
    fetchAllShows: boolean
    fetchSearchResult: boolean
  }
  isSuccess: {
    fetchAllShows: boolean
    fetchSearchResult: boolean
  }
  error: null | unknown | SHOWS_SLICE_ERROR_Interface
}
