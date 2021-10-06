import React from 'react'
import LoadingContext from './loading-context'

const LoadingProvider: React.FC = ({children}) => {
    const [loading, toggle] = React.useState<boolean>(true)

    return (
        <LoadingContext.Provider value={{ loading, toggle }}>
            {children}
        </LoadingContext.Provider>
    )
}

export default LoadingProvider