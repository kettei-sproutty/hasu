import React from 'react'
import useLoading from '../context/loading/useLoading'

const LoadingComponent: React.FC = () => {
    const [loading] = useLoading()

    if (!loading) return null

    return (
        <div className="w-96 h-96 z-50 bg-red-500" />
    )
}

export default LoadingComponent