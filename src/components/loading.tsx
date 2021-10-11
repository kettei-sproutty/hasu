import React from 'react'
import useLoading from '../context/loading/useLoading'
import SmallLogo from './layout/logo-small'

const LoadingComponent: React.FC = () => {
  const [loading] = useLoading()

  if (!loading) return null

  return (
    <div className="absolute z-50 bg-gray-200 size-full">
      <div className="absolute w-16 h-16 inset-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <SmallLogo className="animate-pulse" width={64} height={64} />
      </div>
    </div>
  )
}

export default LoadingComponent
