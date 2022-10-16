import './Footer.scss'

import * as React from 'react'

import SocialLinks from '../SocialLinks/SocialLinks'

const Footer: React.SFC<{}> = () => {
  return (
    <footer className="footer">
      <div className="container">
        <SocialLinks />
        <ul className="footer-navigation">
          <li>
            <a href="#classes">Тренування</a>
          </li>
          <li>
            <a href="#gallery">Галерея</a>
          </li>
          <li>
            <a href="#coaches">Тренери</a>
          </li>
          <li>
            <a href="#contacts">Контакти</a>
          </li>
          <li>
            <a href="#price">Ціни</a>
          </li>
          <li>
            <a href="#schedule">Графік занять</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
