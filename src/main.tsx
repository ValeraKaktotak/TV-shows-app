import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import { ThemeProvider } from 'styled-components'
import { persistor, store } from './redux/store'
import { router } from './routes/routesConfig'
import { theme } from './styles/theme/theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </PersistGate>
  </Provider>
)
