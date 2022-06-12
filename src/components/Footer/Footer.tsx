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
            <a href="#classes">Класи</a>
          </li>
          <li>
            <a href="#gallery">Галерея</a>
          </li>
          <li>
            <a href="#coaches">Тренери</a>
          </li>
          <li>
            <a href="#blog">Блог</a>
          </li>
          <li>
            <a href="#contacts">Контакти</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
