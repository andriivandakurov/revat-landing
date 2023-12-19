import './Contacts.scss'

import * as React from 'react'
import Form from './Form/Form'

import mapIcon from '../../images/gmaps-icon.svg';

export enum Tabs {
  revat1 = 'Жовківська',
  revat2 = 'Кульпарківська'
}

class Contacts extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedTabName: Tabs.revat1
    };
    this.switchTab = this.switchTab.bind(this);
  }

  switchTab(selectedTabName: string) {
    this.setState({ selectedTabName });
  }

  getRevat1() {
    return (
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
              Пн.-ПТ. 7:00 - 21:00
              <br />
              Сб. 9:00 - 14:00
              <br />
              Нд. ВИХІДНИЙ
            </p>
          </div>

          <div className="address-block">
            <h5>Контакти</h5>
            <a href="tel:+380934277353">+38 093 427 73 53</a>
            <address>
              <a href="https://goo.gl/maps/RU6y1cPijDB2" target="_blank">
                <span>
                  вул. Жовківська 22
                  <br />
                  Львів, Україна
                </span>
                <object data={mapIcon} type="image/svg+xml" />
              </a>
            </address>
            <a href="mailto:hello@revatgym.com">hello@revatgym.com</a>
          </div>
        </div>

        <div className="form-wrapper">
          <Form activeTab={Tabs.revat1} tabClick={this.switchTab} />
        </div>
      </div>
    )
  }

  getRevat2() {
    return (
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
              Пн.-ПТ. 7:00 - 21:00
              <br />
              Сб. 9:00 - 14:00
              <br />
              Нд. ВИХІДНИЙ
            </p>
          </div>

          <div className="address-block">
            <h5>Контакти</h5>
            <a href="tel:+380934277353">+38 093 427 73 53</a>
            <address>
              <a href="https://maps.app.goo.gl/2HWWT2xW99jxmXtC7" target="_blank">
                <span>
                  вул. Кульпарківська 93
                  <br />
                  Львів, Україна
                </span>
                <object data={mapIcon} type="image/svg+xml" />
              </a>
            </address>
            <a href="mailto:hello@revatgym.com">hello@revatgym.com</a>
          </div>
        </div>

        <div className="form-wrapper">
          <Form activeTab={Tabs.revat2} tabClick={this.switchTab} />
        </div>
      </div>
    )
  }

  render() {
    return (
      <section className="contacts" id="contacts">
        {this.state.selectedTabName === Tabs.revat1 ? this.getRevat1() : this.getRevat2()}
      </section>
    );
  }
}

export default Contacts