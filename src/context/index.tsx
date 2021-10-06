import React from 'react'
import LoadingProvider from "./loading/loading-provider"

const AppContext: React.FC = ({ children}) => {
    return (
        <LoadingProvider>
            {children}
        </LoadingProvider>
    )
}

export default AppContext