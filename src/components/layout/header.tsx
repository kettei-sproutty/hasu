import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { useHistory } from 'react-router-dom'
import getPageRoute from '../../context/routes/get-route'
import BigLogo from './logo-big'
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const history = useHistory()
  const { isAuthenticated, user } = useAuth0()
  const { t } = useTranslation('common')

  const navigateToHome = (e: React.MouseEvent) => {
    e.preventDefault()

    const route = getPageRoute('home')
    history.push(route)
  }

  const navigateToLogin = () => {
    const route = getPageRoute('login')
    history.push(route)
  }

  return (
    <nav className="header">
      <div className="inline-flex">
        <a className="header-logo" href="/" onClick={navigateToHome}>
          <span className="sr-only">Go to Home</span>
          <div className="block">
            <BigLogo />
          </div>
        </a>
      </div>
      <div className="flex-shrink-0">
        {isAuthenticated ? (
          <img
            className="w-8 h-8 rounded-full"
            width="32"
            height="32"
            alt="user picture"
            src={user?.picture}
          />
        ) : (
          <button onClick={navigateToLogin}>{t('login')}</button>
        )}
      </div>
    </nav>
  )
}

export default Header
