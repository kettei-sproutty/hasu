import React from 'react'
import AuthProvider from './authentication/auth-provider'
import LoadingProvider from './loading/loading-provider'

const AppContext: React.FC = ({ children }) => {
  return (
    <AuthProvider>
        <LoadingProvider>
          {children}
        </LoadingProvider>
    </AuthProvider>
  )
}

export default AppContext
