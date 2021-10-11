import React from 'react'
import logo from '../../public/logo/big.webp'

type BigLogoProps = {
  width?: string | number
  height?: string | number
  className?: string
}

const BigLogo: React.FC<BigLogoProps> = ({ width = 96, height = 32, className = '' }) => {
  return (
    <picture className="header__logo bg-gray-50">
      <img
        className={className}
        width={width}
        height={height}
        alt="Logo"
        src={logo}
      />
    </picture>
  )
}

export default BigLogo
