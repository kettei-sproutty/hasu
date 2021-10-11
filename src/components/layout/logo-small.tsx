import React from 'react'
import logo32 from '../../public/logo/square/32.webp'
import logo64 from '../../public/logo/square/64.webp'
import logo128 from '../../public/logo/square/128.webp'
import logo192 from '../../public/logo/square/192.png'
import logo512 from '../../public/logo/square/512.png'

type SmallLogoProps = {
  width?: string | number
  height?: string | number
  className?: string
}

const SmallLogo: React.FC<SmallLogoProps> = ({ width = 32, height = 32, className = '' }) => {
  return (
    <picture className="header__logo">
      <source width={512} height={512} type='image/png' srcSet={logo512 + ' 512w'} />
      <source width={192} height={192} type='image/png' srcSet={logo192 + ' 192w'} />
      <source width={128} height={128} type="image/webp" srcSet={logo128 + ' 128w'} />
      <source width={64} height={64} type="image/webp" srcSet={logo64 + ' 64w'} />
      <source width={32} height={32} type="image/webp" srcSet={logo32 + ' 32w'} />
      <img
        className={className}
        width={width}
        height={height}
        alt="Logo"
        src={logo32}
      />
    </picture>
  )
}

export default SmallLogo
