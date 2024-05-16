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

export const showsService = {
  fetchAllShows,
  fetchSearchResult
}
