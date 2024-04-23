import './Footer.scss'

import * as React from 'react'

import SocialLinks from '../SocialLinks/SocialLinks'

const Footer: React.SFC<{}> = () => {
  return (
    <footer className="footer">
      <div className="container">
        <SocialLinks />
      </div>
    </footer>
  )
}

export default Footer
