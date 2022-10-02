import './ButtonMarkup.scss'
import * as React from 'react'

const ButtonMarkup: React.SFC<{
  onClick?: MouseEventHandler<HTMLDivElement>
}> = ({ children, onClick = () => {} }) => {
  return (
    <div className="button" onClick={onClick}>
      <span>{children}</span>
      <div className="tail" />
    </div>
  )
}

export default ButtonMarkup
