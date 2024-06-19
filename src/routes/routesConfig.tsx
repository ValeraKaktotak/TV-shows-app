import { createBrowserRouter } from 'react-router-dom'

import { App } from '../App'
import { BaseLayout } from '../components'
import routeConstants from '../constant/routeConstants'
import {
  HomeScreen,
  PageNotFound,
  SearchScreen,
  ShowDetailScreen,
  ShowsScreen
} from '../screens'

export const router = createBrowserRouter([
  {
    path: routeConstants.HOME,
    element: <App />,
    children: [
      {
        path: '/',
        element: <BaseLayout />,
        children: [
          {
            path: '/',
            element: <HomeScreen />
          },
          {
            path: routeConstants.SHOWS,
            element: <ShowsScreen />
          },
          {
            path: `${routeConstants.SHOWS}/:id`,
            element: <ShowDetailScreen />
          },
          {
            path: `${routeConstants.SHOWS}/genre/:genre`,
            element: <ShowsScreen />
          },
          {
            path: routeConstants.SEARCH,
            element: <SearchScreen />
          },
          {
            path: '*',
            element: <PageNotFound />
          }
        ]
      }
    ]
  }
])
