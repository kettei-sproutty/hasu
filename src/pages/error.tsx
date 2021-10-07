import React from 'react'

type ErrorPageProps = {
    message: string
}

const ErrorPage: React.FC<ErrorPageProps> = props => {

    return (
        <div>{props.message}</div>
    )
}

export default ErrorPage