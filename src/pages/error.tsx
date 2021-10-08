import React from 'react'
import { useHistory } from 'react-router'
import getPageRoute from '../context/routes/get-route'

type ErrorPageProps = {
    message?: string
}

const ErrorPage: React.FC<ErrorPageProps> = props => {

    const history = useHistory()

    const navigateToHome = () => {
        const route = getPageRoute('home')
        history.push(route)
    }

    return (
        <div className="page">
            <div className="flex flex-col items-center justify-center">
                <p>{props.message}</p>
                <button className="button button__primary" onClick={navigateToHome}>Retry</button>
            </div>
        </div>
    )
}

export default ErrorPage