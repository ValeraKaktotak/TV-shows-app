import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import { ThemeProvider } from 'styled-components'
import { persistor, store } from './redux/store'

import React from 'react'
import { App } from './App'
import { BaseLayout } from './components'
import routeConstants from './constant/routeConstants'
import {
  HomeScreen,
  PageNotFound,
  SearchScreen,
  ShowDetailScreen,
  ShowsScreen
} from './screens'
import { theme } from './styles/theme/theme'

//////////////////////////////

const router = createBrowserRouter([
  {
    path: routeConstants.HOME,
    element: <App />,
    children: [
      {
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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
