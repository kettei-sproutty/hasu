import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const HomePage: React.FC = () => {
    const { loginWithRedirect } = useAuth0()

    return (
        <div className="page">
            <button onClick={() => loginWithRedirect({ scope: '' })}>
                <span className="not-sr-only">Login</span>
            </button>
        </div>
    )
}

export default HomePage