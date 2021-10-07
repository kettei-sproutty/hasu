import React from 'react'
import { Auth0Provider } from "@auth0/auth0-react"

const AuthProvider: React.FC = ({ children }) => {

    return (
        <Auth0Provider
            domain="dev-ccwdeh5e.us.auth0.com"
            clientId="x6ZZ3uNR3KSZhriPFpls8foF0saVagZU"
            redirectUri={'https://www.google.com'}
        >
            {children}
        </Auth0Provider>
    )
}

export default AuthProvider