import React from 'react'
import LoadingContext from './loading-context'

const LoadingProvider: React.FC = ({children}) => {
    const [loading, setLoading] = React.useState<boolean>(false)

    return (
        <LoadingContext.Provider value={[loading, setLoading]}>
            {children}
        </LoadingContext.Provider>
    )
}

export default LoadingProvider