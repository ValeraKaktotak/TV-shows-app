import axios from 'axios'

import urlConstants from '../../constant/urlConstants'

const fetchAllShows = async (): Promise<ShowsData_Interface[]> => {
  const response = await axios.get<ShowsData_Interface[]>(
    urlConstants.fetchShowsUrl
  )
  return response.data
}

const fetchSearchResult = async (
  query: string
): Promise<SearchShowsData_Interface[]> => {
  const fetchSearchResultsUrl = urlConstants.searchShowsUrl + `${query}`
  const response = await axios.get<SearchShowsData_Interface[]>(
    fetchSearchResultsUrl
  )
  return response.data
}

const fetchSingleShow = async (
  showId: string
): Promise<SingleShowData_Interface> => {
  const fetchShowDetailUrl =
    urlConstants.fetchShowsUrl +
    `/${showId}` +
    urlConstants.seasonsCastEpisodesEmbed
  const response = await axios.get<SingleShowData_Interface>(fetchShowDetailUrl)
  return response.data
}

export const showsService = {
  fetchAllShows,
  fetchSearchResult,
  fetchSingleShow
}
