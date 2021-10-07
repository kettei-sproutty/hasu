import React from 'react'
import { useHistory } from 'react-router-dom'
import logo from '../../public/icons/32.webp'

const Header: React.FC = () => {
  const history = useHistory();

  const navigateToHome = (e: React.MouseEvent) => {
    e.preventDefault()
    history.push('/')
  }

  return (
    <nav className="header">
      <div className="inline-flex">
        <a className="header-logo" href='/' onClick={navigateToHome}>
          <span className="sr-only">Go to Home</span> 
          <div className="block">
            <img width="32" height="32" alt="Logo" src={logo} />
          </div>
        </a>
      </div>
      <div className="flex-initial">
        
      </div>
    </nav>
  )
}

export default Header
