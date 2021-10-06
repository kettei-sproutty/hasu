import React from 'react'

type LoadingContextType = {
    loading: boolean,
    toggle: React.Dispatch<React.SetStateAction<boolean>>
}

const LoadingContext = React.createContext<LoadingContextType>({
    loading: false,
    toggle: () => null
})

export default LoadingContext