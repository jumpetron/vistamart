import React, { useContext } from 'react'
import { NavLink, Route } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'
import { Button, WindmillContext } from '@windmill/react-ui'
import { IoLogOutOutline } from 'react-icons/io5'

// Internal imports
import sidebar from '@/routes/sidebar'
import { AdminContext } from '@/context/AdminContext'
import SidebarSubMenu from '@/components/sidebar/SidebarSubMenu'

const SidebarContent = () => {
  const { t } = useTranslation()
  const { mode } = useContext(WindmillContext)
  const { dispatch } = useContext(AdminContext)

  const handleLogOut = () => {
    dispatch({ type: 'USER_LOGOUT' })
    Cookies.remove('adminInfo')
  }

  return (
    <div className="py-4 text-white">
      {/* Logo */}
      <div className="pl-8">
        <a className="text-gray-900 dark:text-gray-200" href="/dashboard">
          <img
            src={
              mode === 'dark'
                ? 'https://staging-frontend.cleversity.com/logo-color.png'
                : 'https://staging-frontend.cleversity.com/logo-color.png'
            }
            alt="vistamart"
            width="80"
          />
        </a>
      </div>

      {/* Sidebar Menu */}
      <ul className="mt-8">
        {sidebar.map((route) =>
          route.routes ? (
            <SidebarSubMenu route={route} key={route.name} />
          ) : (
            <li className="relative" key={route.name}>
              <NavLink
                exact
                to={route.path}
                target={`${route?.outside ? '_blank' : '_self'}`}
                className="px-6 py-4 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-[#7fffd4] dark:hover:text-gray-200"
                activeStyle={{
                  color: '#7fffd4',
                }}
                rel="noreferrer"
              >
                <Route path={route.path} exact={route.exact}>
                  <span
                    className="absolute inset-y-0 left-0 w-1 text-[#7fffd4] rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                  ></span>
                </Route>
                <route.icon className="w-5 h-5" aria-hidden="true" />
                <span className="ml-4">{t(`${route.name}`)}</span>
              </NavLink>
            </li>
          )
        )}
      </ul>

      {/* Logout Button */}
      <span className="lg:fixed bottom-0 px-6 py-6 w-64 mr-auto relative mt-3 block">
        <button
          onClick={handleLogOut}
          className="w-full text-left bg-red-500 hover:bg-red-600 p-3 rounded-md"
        >
          <span className="flex items-center">
            <IoLogOutOutline className="mr-3 text-lg" />
            <span className="text-sm">{t('LogOut')}</span>
          </span>
        </button>
      </span>
    </div>
  )
}

export default SidebarContent
