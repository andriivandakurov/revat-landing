const fields = [
  {
    name: 'name',
    label: "Ім'я та прізвище",
    errorLabel: "Некоректне ім'я",
    validator: new RegExp('^[\u0400-\u04FFa-z\\s]+$', 'i'),
  },
  {
    name: 'phone',
    label: 'Номер телефону',
    errorLabel: 'Некоректний номер телефону',
    validator: new RegExp('^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-s./0-9]{7,9}$'),
  },
  {
    name: 'email',
    label: 'E-mail',
    errorLabel: 'Некоректний email',
    validator: new RegExp('^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$', 'i'),
  },
]

export default fields
