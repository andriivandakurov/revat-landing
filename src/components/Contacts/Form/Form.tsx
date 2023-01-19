import './Form.scss'

import * as React from 'react'
import ButtonMarkup from '../../ButtonMarkup/ButtonMarkup'
import { Formik } from 'formik'

import FormField from '../FormField/FormField'

import validateForm from './validators'
import fields from './fields'

const Form: React.SFC<{}> = () => {
  const formEl: React.MutableRefObject<any> = React.useRef(null)

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
        email: '',
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

            <input type="hidden" name="_next" value={values._next} />

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
