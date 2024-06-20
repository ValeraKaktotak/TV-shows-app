import { FC } from 'react'
import { Outlet } from 'react-router-dom'
//import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './styles/global/GlobalStyles'
//import { theme } from './styles/theme/theme'

export const App: FC = () => {
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <GlobalStyles />
      <Outlet />
      {/* </ThemeProvider> */}
    </>
  )
}
