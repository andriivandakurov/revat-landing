import * as React from 'react'

const ResponsiveImage = ({ src, mobileSrc, className, ...rest }: any) => (
  <picture>
    <source media="(min-width: 768px)" srcSet={src} />
    <img
      src={mobileSrc || src}
      loading="lazy"
      className={className}
      {...rest}
    />
  </picture>
)

export default ResponsiveImage
