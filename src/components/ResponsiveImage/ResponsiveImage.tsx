import * as React from 'react'

const ResponsiveImage = ({ src, mobileSrc, className, ...rest }: any) => (
  <>
    {console.log('qqq', className)}
    <img
      src={mobileSrc || src}
      srcSet={`${mobileSrc || src}, ${src}`}
      loading="lazy"
      className={className}
      {...rest}
    />
  </>
)

export default ResponsiveImage
