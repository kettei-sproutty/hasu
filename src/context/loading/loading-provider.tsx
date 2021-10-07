import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import LoadingContext from './loading-context'

const LoadingProvider: React.FC = ({children}) => {
    const { isLoading } = useAuth0()
    const [loading, setLoading] = React.useState<boolean>(isLoading)

    React.useEffect(() => {
        setLoading(isLoading)
    }, [isLoading])

    return (
        <LoadingContext.Provider value={[loading, setLoading]}>
            {children}
        </LoadingContext.Provider>
    )
}

export default LoadingProvider