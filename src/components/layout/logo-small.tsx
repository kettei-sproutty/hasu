import React from 'react'
import logo32 from '../../public/icons/32.webp'
import logo64 from '../../public/icons/64.webp'
import logo128 from '../../public/icons/128.webp'

type SmallLogoProps = {
  width?: string | number
  height?: string | number
  className?: string
}

const SmallLogo: React.FC<SmallLogoProps> = ({ width = 32, height = 32, className = '' }) => {
  return (
    <picture className="header__logo">
      <source type="image/webp" srcSet={logo128 + ' 128w'} />
      <source type="image/webp" srcSet={logo64 + ' 64w'} />
      <source type="image/webp" srcSet={logo32 + ' 32w'} />
      <img
        className={className}
        width={width}
        height={height}
        alt="Logo"
        src={logo128}
      />
    </picture>
  )
}

export default SmallLogo
