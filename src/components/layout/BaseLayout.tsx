import type { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { PageWrapper } from '../../styles/global/default'
import { Footer } from '../footer/Footer'
import { Header } from '../header/Header'

export const BaseLayout: FC = () => {
  return (
    <PageWrapper>
      <Header />
      {/* main content */}
      <section className='min-height'>
        <Outlet />
      </section>
      {/* end of main content */}
      <Footer />
    </PageWrapper>
  )
}
