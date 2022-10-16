import './Header.scss'

import * as React from 'react'
import * as classNames from 'classnames'

import SocialLinks from '../SocialLinks/SocialLinks'

import CloseIcon from '../../images/close.svg'
import MenuIcon from '../../images/menu.svg'
import phoneIcon from '../../images/social-icons/phone-icon.svg'

const Header = () => {
  const [isOpen, toogleNav] = React.useState(false)

  const handler = () => {
    const mobileQuery = window.matchMedia('(max-width: 767px)')

    if (mobileQuery.matches) {
      if (isOpen) {
        window.document.body.classList.remove('no-scroll')
      } else {
        window.document.body.classList.add('no-scroll')
      }

      toogleNav(!isOpen)
    }
  }

  return (
    <header className={classNames('header', { open: isOpen })}>
      <button className="header-nav-button" onClick={handler}>
        <img src={isOpen ? CloseIcon : MenuIcon} />
      </button>

      <ul className="header-languages">
        <li>
          <a href="#">en</a>
        </li>
        <li> | </li>
        <li>
          <a href="#">ua</a>
        </li>
      </ul>

      <ul className="header-navigation" onClick={handler}>
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

      <a href="tel:+380934277353" className="contact-phone">
        <object data={phoneIcon} type="image/svg+xml" />
        +380934277353
      </a>

      <SocialLinks />
    </header>
  )
}

export default Header
