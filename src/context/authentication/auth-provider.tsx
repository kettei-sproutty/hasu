import React from 'react'
import { Auth0Provider } from "@auth0/auth0-react"
import ErrorPage from '../../pages/error'

const AuthProvider: React.FC = ({ children }) => {

    const AUTH0_DOMAIN = process.env['AUTH0_DOMAIN']
    const AUTH0_CLIENT_ID = process.env['AUTH0_CLIENT_ID']
    const AUTH0_SCOPE = process.env['AUTH0_SCOPE']
    const AUTH0_REDIRECT_URI = process.env['AUTH0_REDIRECT_URI']

    if (!AUTH0_DOMAIN || !AUTH0_CLIENT_ID || !AUTH0_SCOPE || !AUTH0_REDIRECT_URI) {
        return <ErrorPage message="Auth0 Error" />
    }

    return (
        <Auth0Provider
            domain={AUTH0_DOMAIN!}
            clientId={AUTH0_CLIENT_ID}
            scope={AUTH0_SCOPE}
            redirectUri={AUTH0_REDIRECT_URI}
        >
            {children}
        </Auth0Provider>
    )
}

export default AuthProvider