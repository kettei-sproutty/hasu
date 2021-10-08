import React from 'react'
import { useHistory } from 'react-router-dom'
import getPageRoute from '../../context/routes/get-route'
import logo32 from '../../public/icons/32.webp'
import logo64 from '../../public/icons/64.webp'
import logo128 from '../../public/icons/128.webp'

const Header: React.FC = () => {
  const history = useHistory()

  const navigateToHome = (e: React.MouseEvent) => {
    e.preventDefault()

    const route = getPageRoute('home')
    history.push(route)
  }

  return (
    <nav className="header">
      <div className="inline-flex">
        <a className="header-logo" href="/" onClick={navigateToHome}>
          <span className="sr-only">Go to Home</span>
          <div className="block">
            <picture className="header__logo">
              <source type="image/webp" srcSet={logo128 + ' 128w'} />
              <source type="image/webp" srcSet={logo64 + ' 64w'} />
              <img width="32" height="32" alt="Logo" src={logo32} />
            </picture>
          </div>
        </a>
      </div>
      <div>
        <span>Hasu</span>
      </div>
      <div className="flex-initial">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="feather feather-bell"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      </div>
    </nav>
  )
}

export default Header
