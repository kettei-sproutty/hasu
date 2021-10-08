import React from 'react'
import browser from 'webextension-polyfill'

const AuthPage: React.FC = () => {

    const handleLogin = () => {
        browser.tabs.create({ url: '/auth/login' })
    } 

    return (
        <div className="page">
            <button className="button button__primary" onClick={handleLogin}>
                <span className="not-sr-only">Login</span>
            </button>
        </div>
    )
}

export default AuthPage