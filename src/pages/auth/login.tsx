import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import SmallLogo from '../../components/layout/logo-small'
import { useHistory } from 'react-router'
import getPageRoute from '../../context/routes/get-route'

const AuthPage: React.FC = () => {
  const { loginWithPopup } = useAuth0()
  const history = useHistory()

  const handleLogin = async () => {
      return loginWithPopup()
        .then(() => {
            const route = getPageRoute('home')
            history.push(route)
        })
        .catch(console.error)
  }

  return (
    <div className="page">
      <div className="flex items-center justify-center h-full p-4 pt-4 bg-gray-50">
        <div className="w-full space-y-8">
          <div>
            <SmallLogo className={'mx-auto'} width={48} height={48} />
            <h2 className="mt-6 text-3xl font-bold text-center text-gray-700">
              Sign in to your account
            </h2>
          </div>
          <button onClick={handleLogin}>Log In</button>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
