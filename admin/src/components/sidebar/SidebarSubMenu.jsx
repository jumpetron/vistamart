import React, { useState } from "react";
import { NavLink, Route,useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  IoChevronDownOutline,
  IoChevronForwardOutline,
  IoRemoveSharp,
} from "react-icons/io5";

const SidebarSubMenu = ({ route }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const {pathname} = useLocation()


  return (
    <>
      <li className="relative px-6 py-3" key={route.name}>
        <button
          className="inline-flex items-center justify-between focus:outline-none w-full text-sm font-semibold transition-colors duration-150 hover:text-[#7fffd4] dark:hover:text-gray-200"
          onClick={() => setOpen(!open)}
          aria-haspopup="true"
        >
          <span className="inline-flex items-center">
            <route.icon className="w-5 h-5" aria-hidden="true" />
            <span className="ml-4 mt-1">{t(`${route.name}`)}</span>
            <span className="pl-4 mt-1">
              {open ? <IoChevronDownOutline /> : <IoChevronForwardOutline />}
            </span>
          </span>
          {/* <DropdownIcon className="w-4 h-4" aria-hidden="true" /> */}
        </button>
        {open && (
          <ul
            className="p-2  overflow-hidden text-sm font-medium text-gray-200 rounded-md dark:text-gray-400 dark:bg-gray-900"
            aria-label="submenu"
          >
            {route.routes.map((child, i) =>{
                const isActive = pathname.includes(child.path)
                return (
                  <li key={i + 1}>
                    {child?.outside ? (
                      <a
                        href={import.meta.env.VITE_APP_STORE_DOMAIN}
                        target="_blank"
                        className={`flex items-center font-serif py-1 text-sm ${isActive?'text-[#7fffd4]':'text-gray-200'} hover:text-[#7fffd4] cursor-pointer`}
                        rel="noreferrer"
                      >
                        <Route path={child.path} exact={child.exact}>
                          <span
                            className="absolute inset-y-0 left-0 w-1 bg-[#043B33] rounded-tr-lg rounded-br-lg"
                            aria-hidden="true"
                          ></span>
                        </Route>
                        {/* <route.icon className="w-5 h-5" aria-hidden="true" /> */}
                        <span className="text-xs text-gray-500 pr-1">
                          <IoRemoveSharp />
                        </span>
                        <span className={`${isActive?'text-[#7fffd4]':'text-gray-200'} hover:text-[#7fffd4] dark:hover:text-gray-200`}>
                          {t(`${child.name}`)}
                        </span>
                        {/* <span className="ml-4">{route.name}</span> */}
                      </a>
                    ) : (
                      <NavLink
                        to={child.path}
                        // target={`${child.name === 'Sell' ? '_blank' : '_self'}`}
                        className={`flex items-center font-serif py-1 text-sm ${isActive?'text-[#7fffd4]':'text-gray-200'} hover:text-[#7fffd4] cursor-pointer`}
                        rel="noreferrer"
                      >
                        <Route path={child.path} exact={route.exact}>
                          <span
                            className="absolute inset-y-0 left-0 w-1 bg-emerald-600 rounded-tr-lg rounded-br-lg"
                            aria-hidden="true"
                          ></span>
                        </Route>
                        <span className={`text-xs ${isActive?'text-[#7fffd4]':'text-gray-200'} pr-1`}>
                          <IoRemoveSharp />
                        </span>
                        <span className={`${isActive?'text-[#7fffd4]':'text-gray-200'} hover:text-[#7fffd4] dark:hover:text-gray-200`}>
                          {t(`${child.name}`)}
                        </span>
                      </NavLink>
                    )}
                  </li>
                )
            } )}
          </ul>
        )}
      </li>
    </>
  );
};

export default SidebarSubMenu;
