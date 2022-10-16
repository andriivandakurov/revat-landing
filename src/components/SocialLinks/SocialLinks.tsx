import * as React from 'react'

import './SocialLinks.scss'

import facebookIcon from '../../images/social-icons/facebook-icon.svg'
import instagramIcon from '../../images/social-icons/instagram-icon.svg'
import locationIcon from '../../images/social-icons/location-icon.svg'
import viberIcon from '../../images/social-icons/viber-icon.svg'
import telegramIcon from '../../images/social-icons/telegram-icon.svg'

const SocialLinks: React.SFC<{}> = () => (
  <ul className="socials">
    <li>
      <a href="viber://add?number=+380934277353" target="_blank">
        <object data={viberIcon} type="image/svg+xml" />
      </a>
    </li>
    <li>
      <a href="https://t.me/revatlviv" target="_blank">
        <object data={telegramIcon} type="image/svg+xml" />
      </a>
    </li>
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
