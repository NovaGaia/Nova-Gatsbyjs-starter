import React from 'react'
import { Link } from 'gatsby'
import NavPrimary from '../../constants/links-desktop'
import { FaBars } from 'react-icons/fa'
import {
  nav,
  navInternal,
  logo,
  menu,
  menuLinks,
  navPrimary,
  menuMobileButton,
  iconFaBars,
} from './style.module.css'
import Logo from '../Logo'

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className={nav}>
      <div className={navInternal}>
        <div className={logo}>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className={menu}>
          <div className={menuLinks}>
            <NavPrimary styleClass={navPrimary} />
          </div>
          <button
            type="button"
            className={menuMobileButton}
            onClick={toggleSidebar}
          >
            <FaBars className={iconFaBars} />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
