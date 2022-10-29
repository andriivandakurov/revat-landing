import * as React from 'react'

import './SocialLinks.scss'

import facebookIcon from '../../images/social-icons/facebook-icon.png'
import instagramIcon from '../../images/social-icons/instagram-icon.png'
import locationIcon from '../../images/social-icons/location-icon.png'
import viberIcon from '../../images/social-icons/viber-icon.svg'
import telegramIcon from '../../images/social-icons/telegram-icon.svg'

const SocialLinks: React.SFC<{
  isHeader?: boolean
}> = ({ isHeader = false }) => (
  <ul className={`socials ${isHeader && 'is-header'}`}>
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
        <img src={facebookIcon} alt="facebook" />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/revat_gym/" target="_blank">
        <img src={instagramIcon} alt="instagram" />
      </a>
    </li>
    <li>
      <a href="https://goo.gl/maps/RU6y1cPijDB2" target="_blank">
        <img src={locationIcon} alt="location" />
      </a>
    </li>
  </ul>
)

export default SocialLinks
