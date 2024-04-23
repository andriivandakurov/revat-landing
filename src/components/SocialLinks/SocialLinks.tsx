import * as React from 'react'

import './SocialLinks.scss'

import facebookIcon from '../../images/social-icons/facebook-icon.png'
import instagramIcon from '../../images/social-icons/instagram-icon.png'

const SocialLinks: React.SFC<{
  isHeader?: boolean
}> = ({ isHeader = false }) => (
  <ul className={`socials ${isHeader && 'is-header'}`}>
    <li>
      <a href="https://www.facebook.com/RevatGym" target="_blank">
        <img src={facebookIcon} alt="facebook" />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/revat_gym/" target="_blank">
        <img src={instagramIcon} alt="instagram" />
      </a>
    </li>
  </ul>
)

export default SocialLinks
