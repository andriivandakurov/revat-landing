import './Contacts.scss'

import * as React from 'react'
import Form from './Form/Form'

const Contacts: React.SFC<{}> = () => {
  return (
    <section className="contacts" id="contacts">
      <div className="container">
        <div className="information">
          <h3>
            Будемо
            <br />
            на зв'язку!
          </h3>

          <div className="working-hours">
            <h5>Ми відчинені</h5>
            <p>
              Пн.-ПТ. 8:00 - 21:00
              <br />
              Сб. 11:30 - 15:00
              <br />
              Нд. ВИХІДНИЙ
            </p>
          </div>

          <div className="address-block">
            <h5>Контакти</h5>
            <a href="tel:+380934277353">+38 093 427 73 53</a>
            <address>
              <a href="https://goo.gl/maps/RU6y1cPijDB2" target="_blank">
                вул. Жовківська 22
                <br />
                Львів, Україна
                <br />
              </a>
            </address>
            <a href="mailto:hello@revatgym.com">hello@revatgym.com</a>
          </div>
        </div>

        <div className="form-wrapper">
          <Form />
        </div>
      </div>
    </section>
  )
}

export default Contacts
