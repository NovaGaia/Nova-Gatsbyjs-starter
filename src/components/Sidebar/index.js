import React from 'react'
import './style.css'
import { Link } from 'gatsby'
import Logo from '../Logo'
import Links from '../../constants/links-mobile'
import RSLink from '../../constants/links-social'
import { IoMdClose } from 'react-icons/io'

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`bg-accent-light p-10 sidebar ${isOpen ? 'showSidebar' : ''}`}
    >
      <button className="close-btn" onClick={toggleSidebar}>
        <IoMdClose className="absolute top-3 text-accent right-0 bg-transparent border-transparent font-semibold text-5xl cursor-pointer" />
      </button>
      <div className="flex flex-col gap-4">
        <Link to="/">
          <Logo />
        </Link>
        <Links styleClass="flex whitespace-nowrap flex-col gap-4" />
        <RSLink styleClass="flex whitespace-nowrap flex-col gap-4" />
      </div>
    </aside>
  )
}

export default Sidebar
