import React from 'react'
import { useHistory } from 'react-router'
import getPageRoute from '../context/routes/get-route'

const HomePage: React.FC = () => {

    const history = useHistory()

    const navigateToLogin = () => {
        const route = getPageRoute('login')
        history.push(route)
    }

    return (
        <div className="page">
            <button className="button button__primary" onClick={navigateToLogin}>
                <span className="not-sr-only">Auth</span>
            </button>
        </div>
    )
}

export default HomePage