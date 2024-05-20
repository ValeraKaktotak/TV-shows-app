interface ShowMetadata {
  name: SingleShowData_Interface.name
  officialSite: SingleShowData_Interface.officialSite
  premiered: SingleShowData_Interface.premiered
  ended: SingleShowData_Interface.ended
  genres: SingleShowData_Interface.genres
  image: SingleShowData_Interface.image
  rating: SingleShowData_Interface.rating
  runtime: SingleShowData_Interface.runtime
  status: SingleShowData_Interface.status
  language: SingleShowData_Interface.language
  url: SingleShowData_Interface.url
}
interface SingleShowData_Interface {
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
  officialSite: string
  schedule: Schedule
  rating: Rating
  weight: number
  network: Network
  webChannel?: string
  dvdCountry?: string
  externals: Externals
  image: Image
  summary: string
  updated: number
  _links: Links
  _embedded: Embedded
}
interface Embedded {
  episodes: Episode[]
  cast: Cast[]
  seasons: Season[]
}
interface Season {
  id: number
  url: string
  number: number
  name: string
  episodeOrder: number
  premiereDate: string
  endDate: string
  network: Network
  webChannel?: string
  image: Image
  summary: string
  _links: Links3
}
interface Cast {
  person: Person
  character: Character
  self: boolean
  voice: boolean
}
interface Character {
  id: number
  url: string
  name: string
  image?: Image
  _links: Links3
}
interface Person {
  id: number
  url: string
  name: string
  country: Country
  birthday?: string
  deathday?: string
  gender: string
  image: Image
  updated: number
  _links: Links3
}
interface Links3 {
  self: Self
}
interface Episode {
  id: number
  url: string
  name: string
  season: number
  number: number
  type: string
  airdate: string
  airtime: string
  airstamp: string
  runtime: number
  rating: Rating
  image: Image
  summary: string
  _links: Links2
}
interface Links2 {
  self: Self
  show: Previousepisode
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
