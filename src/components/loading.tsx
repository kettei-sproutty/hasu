import React from 'react'
import useLoading from '../context/loading/useLoading'

const LoadingComponent: React.FC = () => {
  const [loading] = useLoading()

  if (!loading) return null

  return <div className="absolute z-50 bg-pink-400 size-full" />
}

export default LoadingComponent
