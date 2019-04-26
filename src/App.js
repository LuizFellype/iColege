import React, { useState, useRef, useEffect } from 'react'
import Router from './Router'
import { Route } from 'react-router-dom'
import { ScrollPanel } from 'primereact/components/scrollpanel/ScrollPanel'
import classNames from 'classnames'

// Auth
import LoginPage from './pages/auth/Login'

// Layout
import Topbar from './containers/TopBar/Topbar'
import Menu from './containers/Menu/Menu'
import Footer from './containers/Footer'

// Components
import Profile from './components/Profile/Profile'

// CSS
import 'primereact/resources/themes/nova-light/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'fullcalendar/dist/fullcalendar.css'
import './layout/layout.css'

const App = () => {
  const [layoutMode, setLayoutMode] = useState('static')
  const [layoutColorMode, setLayoutColorMode] = useState('dark')
  const [staticMenuInactive, setStaticMenuInactive] = useState(false)
  const [overlayMenuActive, setOverlayMenuActive] = useState(false)
  const [mobileMenuActive, setMobileMenuActive] = useState(false)

  const layoutMenuScroller = useRef(null)

  const addClass = (element, className) => {
    if (element.classList) element.classList.add(className)
    else element.className += ' ' + className
  }

  const removeClass = (element, className) => {
    if (element.classList) element.classList.remove(className)
    else {
      element.className = element.className.replace(
        new RegExp(
          '(^|\\b)' + className.split(' ').join('|') + '(\\b|$)',
          'gi'
        ),
        ' '
      )
    }
  }

  useEffect(() => {
    if (mobileMenuActive) {
      addClass(document.body, 'body-overflow-hidden')
    } else removeClass(document.body, 'body-overflow-hidden')
  })

  const menu = [
    {
      label: 'Dashboard',
      icon: 'pi pi-fw pi-home',
      command: () => {
        window.location = '#/'
      }
    },
    {
      label: 'Menu Modes',
      icon: 'pi pi-fw pi-cog',
      items: [
        {
          label: 'Static Menu',
          icon: 'pi pi-fw pi-bars',
          command: () => setLayoutMode('static')
        },
        {
          label: 'Overlay Menu',
          icon: 'pi pi-fw pi-bars',
          command: () => setLayoutMode('overlay')
        }
      ]
    },
    {
      label: 'Menu Colors',
      icon: 'pi pi-fw pi-align-left',
      items: [
        {
          label: 'Dark',
          icon: 'pi pi-fw pi-bars',
          command: () => setLayoutColorMode('dark')
        },
        {
          label: 'Light',
          icon: 'pi pi-fw pi-bars',
          command: () => setLayoutColorMode('light')
        }
      ]
    },
    {
      label: 'Components',
      icon: 'pi pi-fw pi-globe',
      badge: '9',
      items: [
        { label: 'Sample Page', icon: 'pi pi-fw pi-th-large', to: '/sample' },
        { label: 'Forms', icon: 'pi pi-fw pi-file', to: '/forms' },
        { label: 'Data', icon: 'pi pi-fw pi-table', to: '/data' },
        { label: 'Panels', icon: 'pi pi-fw pi-list', to: '/panels' },
        { label: 'Overlays', icon: 'pi pi-fw pi-clone', to: '/overlays' },
        { label: 'Menus', icon: 'pi pi-fw pi-plus', to: '/menus' },
        { label: 'Messages', icon: 'pi pi-fw pi-spinner', to: '/messages' },
        { label: 'Charts', icon: 'pi pi-fw pi-chart-bar', to: '/charts' },
        { label: 'Misc', icon: 'pi pi-fw pi-upload', to: '/misc' }
      ]
    },
    {
      label: 'Template Pages',
      icon: 'pi pi-fw pi-file',
      items: [
        { label: 'Empty Page', icon: 'pi pi-fw pi-circle-off', to: '/empty' }
      ]
    },
    {
      label: 'Menu Hierarchy',
      icon: 'pi pi-fw pi-search',
      items: [
        {
          label: 'Submenu 1',
          icon: 'pi pi-fw pi-bookmark',
          items: [
            {
              label: 'Submenu 1.1',
              icon: 'pi pi-fw pi-bookmark',
              items: [
                { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
              ]
            },
            {
              label: 'Submenu 1.2',
              icon: 'pi pi-fw pi-bookmark',
              items: [
                { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' },
                { label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-bookmark' }
              ]
            }
          ]
        },
        {
          label: 'Submenu 2',
          icon: 'pi pi-fw pi-bookmark',
          items: [
            {
              label: 'Submenu 2.1',
              icon: 'pi pi-fw pi-bookmark',
              items: [
                { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
                { label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-bookmark' }
              ]
            },
            {
              label: 'Submenu 2.2',
              icon: 'pi pi-fw pi-bookmark',
              items: [
                { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
                { label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-bookmark' }
              ]
            }
          ]
        }
      ]
    },
    {
      label: 'Documentation',
      icon: 'pi pi-fw pi-question',
      command: () => {
        window.location = '#/documentation'
      }
    },
    {
      label: 'View Source',
      icon: 'pi pi-fw pi-search',
      command: () => {
        window.location = 'https://github.com/primefaces/sigma'
      }
    }
  ]

  let menuClick

  const onWrapperClick = () => {
    if (!menuClick) {
      setOverlayMenuActive(false)
      setMobileMenuActive(false)
    }

    menuClick = false
  }

  const onToggleMenu = ({ preventDefault }) => {
    menuClick = true

    if (window.innerWidth > 1024) {
      if (layoutMode === 'overlay') {
        setOverlayMenuActive(!overlayMenuActive)
      } else if (layoutMode === 'static') {
        setStaticMenuInactive(!staticMenuInactive)
      }
    } else {
      setMobileMenuActive(!mobileMenuActive)
    }

    preventDefault()
  }

  const onSidebarClick = () => {
    menuClick = true
    setTimeout(() => {
      layoutMenuScroller.current.moveBar()
    }, 500)
  }

  const onMenuItemClick = ({ item }) => {
    if (!item.items) {
      setOverlayMenuActive(false)
      setMobileMenuActive(false)
    }
  }

  const renderApp = () => {
    const logo =
      layoutColorMode === 'dark'
        ? 'assets/layout/images/logo-white.svg'
        : 'assets/layout/images/logo.svg'

    const wrapperClass = classNames('layout-wrapper', {
      'layout-overlay': layoutMode === 'overlay',
      'layout-static': layoutMode === 'static',
      'layout-static-sidebar-inactive':
        staticMenuInactive && layoutMode === 'static',
      'layout-overlay-sidebar-active':
        overlayMenuActive && layoutMode === 'overlay',
      'layout-mobile-sidebar-active': mobileMenuActive
    })
    const sidebarClassName = classNames('layout-sidebar', {
      'layout-sidebar-dark': layoutColorMode === 'dark'
    })

    return (
      <div className={wrapperClass} onClick={onWrapperClick}>
        <Topbar onToggleMenu={onToggleMenu} />
        <div className={sidebarClassName} onClick={onSidebarClick}>
          <ScrollPanel ref={layoutMenuScroller} style={{ height: '100%' }}>
            <div className='layout-sidebar-scroll-content'>
              <div className='layout-logo'>
                <img alt='Logo' src={logo} />
              </div>
              <Profile />
              <Menu model={menu} onMenuItemClick={onMenuItemClick} />
            </div>
          </ScrollPanel>
        </div>

        <div className='layout-main'>
          <Router />
        </div>
        <Footer />
        <div className='layout-mask' />
      </div>
    )
  }

  return (
    <>
      {window.location.hash === '#/login' ? (
        <Route path='/login' component={LoginPage} />
      ) : (
        renderApp()
      )}
    </>
  )
}

export default App
