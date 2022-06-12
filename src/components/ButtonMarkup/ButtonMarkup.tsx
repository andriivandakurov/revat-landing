import './ButtonMarkup.scss'
import * as React from 'react'

const ButtonMarkup: React.SFC<{}> = ({ children }) => {
  return (
    <div className='button'>
      <span>{children}</span>
      <div className='tail' />
    </div>
  )
}

export default ButtonMarkup