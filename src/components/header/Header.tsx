import { type FC,useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

import { Icons } from '../../assets/icons'
import { Images } from '../../assets/images'
import routeConstants from '../../constant/routeConstants'
import { useHeaderBg } from '../../hooks/useHeaderBg'
import {
  closeSidebar,
  openSidebar,
  selectIsSidebarOpen
} from '../../redux/slices/sidebarSlice'
import { useAppDispatch } from '../../redux/store'
import { Container } from '../../styles/global/default'

import {
  BrandWrapper,
  HeaderIconsWrapper,
  HeaderWrapper,
  NavWrapper
} from './Header.styles'

export const Header: FC = () => {
  const location = useLocation()
  const dispatch = useAppDispatch()
  const isSidebarOpen = useSelector(selectIsSidebarOpen)

  const scrollThreshold = 0
  const hasBackground = useHeaderBg(scrollThreshold)
  const headerStyle = hasBackground ? 'bg-black06 sm-header' : 'bg-transparent'

  // click out of our component
  const navRef = useRef<HTMLDivElement>(null)
  const handleNavClose = (event: MouseEvent): void => {
    if (
      navRef?.current &&
      !navRef.current.contains(event.target as HTMLElement) &&
      !isChildOf(event.target as HTMLElement, 'sidebar-open-btn')
    ) {
      dispatch(closeSidebar())
    }
  }

  // check all parent components
  const isChildOf = (element: HTMLElement, className: string) => {
    let currentElement: HTMLElement | null = element
    while (
      currentElement !== null &&
      !currentElement?.classList?.contains(className)
    ) {
      currentElement = currentElement.parentNode as HTMLElement | null
    }
    return currentElement?.classList?.contains(className) ?? false
  }

  useEffect(() => {
    document.body.addEventListener('click', handleNavClose)
    return () => {
      document.body.removeEventListener('click', handleNavClose)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // auto close on link click
  const handleNavLinkClick = () => {
    dispatch(closeSidebar())
  }

  return (
    <HeaderWrapper className={'flex items-center' + ` ${headerStyle}`}>
      <Container className={'w-full'}>
        <div className={'header-content flex items-center justify-between'}>
          <BrandWrapper to={routeConstants.HOME}>
            <img src={Images.Logo} alt='site Logo' />
          </BrandWrapper>
          <NavWrapper
            ref={navRef}
            className={
              'flex items-center justify-center' +
              ` ${isSidebarOpen ? 'show' : ''}`
            }
          >
            <button
              type='button'
              className={'sidebar-close-btn'}
              onClick={() => {
                dispatch(closeSidebar())
              }}
            >
              <img src={Icons.Close} alt='Close Icon' />
            </button>
            <ul className={'nav-list flex items-center justify-center'}>
              <li className={'nav-item'}>
                <Link
                  onClick={handleNavLinkClick}
                  to={routeConstants.HOME}
                  className={
                    'nav-link inline-flex items-center justify-center text-center' +
                    ` ${location.pathname == routeConstants.HOME ? 'active' : ''}`
                  }
                >
                  Home
                </Link>
              </li>
              <li className={'nav-item'}>
                <Link
                  onClick={handleNavLinkClick}
                  to={routeConstants.SHOWS}
                  className={
                    'nav-link inline-flex items-center justify-center text-center' +
                    ` ${location.pathname == routeConstants.SHOWS ? 'active' : ''}`
                  }
                >
                  Shows
                </Link>
              </li>
              <li className={'nav-item'}>
                <Link
                  onClick={handleNavLinkClick}
                  to='/support'
                  className={
                    'nav-link inline-flex items-center justify-center text-center' +
                    ` ${location.pathname == '/support' ? 'active' : ''}`
                  }
                >
                  Support
                </Link>
              </li>
              <li className={'nav-item'}>
                <Link
                  onClick={handleNavLinkClick}
                  to='/subscription'
                  className={
                    'nav-link inline-flex items-center justify-center text-center' +
                    ` ${location.pathname == '/subscription' ? 'active' : ''}`
                  }
                >
                  Subscription
                </Link>
              </li>
            </ul>
          </NavWrapper>
          <HeaderIconsWrapper className={'flex items-center'}>
            <Link
              to={routeConstants.SEARCH}
              className={'icon-link flex items-center justify-center'}
            >
              <img src={Icons.Search} alt='Search Icon' />
            </Link>
            <Link
              to='/'
              className={'icon-link flex items-center justify-center'}
            >
              <img src={Icons.Bell} alt='Bell Icon' />
            </Link>
            <button
              type='button'
              className={
                'icon-link flex items-center justify-center sidebar-open-btn'
              }
              onClick={() => {
                dispatch(openSidebar())
              }}
            >
              <img src={Icons.Menu} alt='Menu Icon' />
            </button>
          </HeaderIconsWrapper>
        </div>
      </Container>
    </HeaderWrapper>
  )
}
