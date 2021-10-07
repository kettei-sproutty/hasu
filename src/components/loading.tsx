import React from 'react'
import useLoading from '../context/loading/useLoading'

const LoadingComponent: React.FC = () => {
  const [loading] = useLoading()

  if (!loading) return null

  return <div className="z-50 w-full h-full" />
}

export default LoadingComponent
