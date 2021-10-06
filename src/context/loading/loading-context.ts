import React from 'react'

type LoadingContextType = [boolean, React.Dispatch<React.SetStateAction<boolean>>]

const loading = false
const setLoading = () => null

const LoadingContext = React.createContext<LoadingContextType>([loading, setLoading])

export default LoadingContext