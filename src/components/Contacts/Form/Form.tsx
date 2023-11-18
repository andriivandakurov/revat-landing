import './Form.scss'

import * as React from 'react'
import ButtonMarkup from '../../ButtonMarkup/ButtonMarkup'
import { Formik } from 'formik'

import FormField from '../FormField/FormField'

import validateForm from './validators'
import fields from './fields'
import { Tabs } from '../Contacts'

type Props = {
  activeTab: Tabs,
  tabClick: (selectedTab: Tabs) => void,
}

const Form: React.SFC<Props> = ({ activeTab, tabClick }) => {
  const formEl: React.MutableRefObject<any> = React.useRef(null);

  const isActiveTab = (originalTabName: Tabs) => {
    return activeTab === originalTabName ? 'active' : '';
  }

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
        email: '',
        location: '',
        _next: '//revatgym.com',
      }}
      validateOnBlur={true}
      validate={validateForm}
      onSubmit={() => {
        formEl.current.submit()
      }}
    >
      {({
        values,
        handleChange,
        handleSubmit,
        handleBlur,
        errors,
        touched,
      }: any) => {
        return (
          <form
            noValidate
            ref={formEl}
            className="contact-form"
            action="https://formspree.io/f/xbjbavvb"
            method="POST"
            onSubmit={handleSubmit}
          >
            <h3>Записатись на безкоштовне треннування</h3>

            <div className="buttons-container">
              <button className={`button ${isActiveTab(Tabs.revat1)}`} onClick={() => tabClick(Tabs.revat1)} type='button'>
                <span>{Tabs.revat1}</span>
                <span className="tail"></span>
              </button>
              <button className={`button ${isActiveTab(Tabs.revat2)}`} onClick={() => tabClick(Tabs.revat2)} type='button'>
                <span>{Tabs.revat2}</span>
              </button>
            </div>

            <input type="hidden" name="_next" value={values._next} />
            <input type="hidden" name="location" value={activeTab} />

            {fields.map((field, i) => {
              return (
                <FormField
                  key={i}
                  name={field.name}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  errorLabel={errors[field.name]}
                  value={values[field.name]}
                  isTouched={touched[field.name]}
                  label={field.label}
                />
              )
            })}

            <button type="submit">
              <ButtonMarkup>Замовити</ButtonMarkup>
            </button>
          </form>
        )
      }}
    </Formik>
  )
}

export default Form
