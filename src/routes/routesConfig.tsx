import { BaseLayout } from '../components'
import routeConstants from '../constant/routeConstants'
import {
  HomeScreen,
  PageNotFound,
  SearchScreen,
  ShowDetailScreen,
  ShowsScreen
} from '../screens'

export const routes = [
  {
    path: routeConstants.HOME,
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
        path: `${routeConstants.SHOWS}/:genre`,
        element: <ShowsScreen />
      },
      {
        path: `${routeConstants.SHOWS}/:id`,
        element: <ShowDetailScreen />
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
