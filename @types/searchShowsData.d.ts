interface SearchShowsData_Interface {
  score: number
  show: Show
}
interface Show {
  id: number
  url: string
  name: string
  type: string
  language: string
  genres: string[]
  status: string
  runtime: number
  averageRuntime: number
  premiered: string
  ended: string
  officialSite?: null | string | number
  schedule: Schedule
  rating: Rating
  weight: number
  network: Network
  webChannel?: null | string | number
  dvdCountry?: null | string | number
  externals: Externals
  image: Image
  summary: string
  updated: number
  _links: Links
}
interface Links {
  self: Self
  previousepisode: Previousepisode
}
interface Previousepisode {
  href: string
  name: string
}
interface Self {
  href: string
}
interface Image {
  medium: string
  original: string
}
interface Externals {
  tvrage: number
  thetvdb: number
  imdb: string
}
interface Network {
  id: number
  name: string
  country: Country
  officialSite: string
}
interface Country {
  name: string
  code: string
  timezone: string
}
interface Rating {
  average: number
}
interface Schedule {
  time: string
  days: string[]
}
