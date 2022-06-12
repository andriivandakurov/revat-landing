export interface FormFieldProps {
  name: string
  handleChange(e: React.ChangeEvent): void
  handleBlur(e: React.FocusEvent): void
  errorLabel: string
  isTouched: boolean
  value: string
  label: string
}
