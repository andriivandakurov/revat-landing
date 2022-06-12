import fields from './fields'

function validate(errorText: string = '', regExp: RegExp | null = null) {
  return function(value: string): string | null {
    if (!value) return "Поле є обов'язковим для заповнення"

    if (regExp && !regExp.test(value)) {
      return errorText
    }

    return null
  }
}

export default function validateForm(values: { [key: string]: string }) {
  let errors: { [key: string]: string | null } = {}

  errors = fields.reduce((errors, field) => {
    const errorValue = validate(field.errorLabel, field.validator)(
      values[field.name]
    )
    if (errorValue) {
      errors[field.name] = errorValue
    }
    return errors
  }, errors)

  return !Object.keys(errors).length ? undefined : errors
}
