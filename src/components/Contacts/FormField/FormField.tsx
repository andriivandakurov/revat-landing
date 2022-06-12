import * as React from 'react'
import * as classNames from 'classnames'
import { FormFieldProps } from '.'

const FormField: React.SFC<FormFieldProps> = ({
  name,
  handleChange,
  handleBlur,
  errorLabel,
  isTouched,
  value,
  label,
}) => {
  return (
    <div
      className={classNames('field', {
        error: errorLabel && isTouched,
      })}
    >
      <input
        id={name}
        onChange={handleChange}
        value={value}
        onBlur={handleBlur}
        name={name}
        required
      />
      <label htmlFor={name}>{label}</label>
      {errorLabel && isTouched && <span>{errorLabel}</span>}
    </div>
  )
}

export default FormField
