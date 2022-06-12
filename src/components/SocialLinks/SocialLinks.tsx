import * as React from 'react'

import './SocialLinks.scss'

import facebookIcon from '../../images/facebook-icon.svg'
import instagramIcon from '../../images/instagram-icon.svg'
import locationIcon from '../../images/location-icon.svg'

const SocialLinks: React.SFC<{}> = () => (
  <ul className="socials">
    <li>
      <a href="https://www.facebook.com/revathardtotal/" target="_blank">
        <object data={facebookIcon} type="image/svg+xml" />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/revat_gym/" target="_blank">
        <object data={instagramIcon} type="image/svg+xml" />
      </a>
    </li>
    <li>
      <a href="https://goo.gl/maps/RU6y1cPijDB2" target="_blank">
        <object data={locationIcon} type="image/svg+xml" />
      </a>
    </li>
  </ul>
)

export default SocialLinks
