import './login-page.css'

import { default as LoginPageTemplate } from './login-page.hbs?raw'
import { LoginFormDataType, PropsType } from '../../types/types.ts'
import Block from '../../services/block.ts'
import FormButton from '../../components/form-button/form-button.ts'
import Link from '../../components/link/link.ts'
import Form from '../../components/form/form.ts'
import FormInput from '../../components/form-input/form-input.ts'
import { FORM_FIELDS_NAMES, HELPERS } from '../../constants/enums.ts'
import { validateForm } from '../../utils/validate-form.ts'
import { loginFormFields } from '../../constants/constants.ts'
import setFormErrors from '../../utils/set-form-errors.ts'
import { registerTemplate } from '../../utils/register-template.ts'
import { components } from '../../components'
import Handlebars from 'handlebars'
import { compare } from '../../helpers/compare.ts'

type Props = PropsType

class LoginPageClass extends Block {
  constructor(props: Props) {
    super(props)

    this.children.login = new FormInput({
      name: FORM_FIELDS_NAMES.login,
      type: 'text',
      label: 'Логин'
    })
    this.children.password = new FormInput({
      name: FORM_FIELDS_NAMES.password,
      type: 'password',
      label: 'Пароль'
    })

    if (!this.children.form) {
      this.children.form = new Form({
        title: 'Вход',
        formProps: { name: 'loginForm' },
        content: [this.children.login, this.children.password],
        actions: [
          new FormButton({
            name: 'login-submit',
            title: 'Войти'
          }),
          new Link({
            title: 'Нет аккаунта?',
            pathName: `/chats`
          })
        ],
        events: {
          submit: (event: unknown) => handleSubmit(event as SubmitEvent, this),
          blur: (event: unknown) => handleBlur(event as FocusEvent, this)
        }
      })
    }
  }

  render() {
    return this.compile(LoginPageTemplate, this.props)
  }
}

const getFieldsValues = (context: Block) => {
  const values = {}
  loginFormFields.forEach(field => {
    Object.assign(values, {
      [field.name]: (context.children[field.name] as FormInput).getValue()
    })
  })
  return values
}

const validate = (context: Block) => {
  const data = getFieldsValues(context)
  return validateForm(data as LoginFormDataType)
}
const handleBlur = (event: FocusEvent, context: Block) => {
  handleError(event as FocusEvent, context)
}
const handleSubmit = (event: SubmitEvent, context: Block) => {
  event.preventDefault()
  handleError(event as SubmitEvent, context)
}
const handleError = (event: Event, context: Block) => {
  if (event.target instanceof HTMLInputElement) {
    const name = event.target.name as FORM_FIELDS_NAMES
    const value = event.target.value
    const input = context.children.form.lists.content.find(
      item => (item as FormInput).props.name === name
    )

    setFormErrors(name, value, input, validate, context)
  }
}
export const LoginPage = new LoginPageClass({
  attributes: { class: 'login-page' }
})

registerTemplate(components)
Handlebars.registerHelper(HELPERS.compare, compare)
