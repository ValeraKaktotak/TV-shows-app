import axios from 'axios'

import urlConstants from '../../constant/urlConstants'

const fetchAllShows = async (): Promise<ShowsData_Interface> => {
  const response = await axios.get<ShowsData_Interface>(
    urlConstants.fetchShowsUrl
  )
  return response.data
}

export const showsService = {
  fetchAllShows
}
