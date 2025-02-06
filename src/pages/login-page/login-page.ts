import './login-page.css'

import { default as LoginPageTemplate } from './login-page.hbs?raw'
import { LoginFormDataType, PropsType } from '../../types/types.ts'
import Block from '../../services/block.ts'
import FormButton from '../../components/form-button/form-button.ts'
import Link from '../../components/link/link.ts'
import Form from '../../components/form/form.ts'
import FormInput from '../../components/form-input/form-input.ts'
import { FORM_FIELDS_NAMES } from '../../constants/enums.ts'
import { validateForm } from '../../utils/validateForm.ts'
import { loginFormFields } from '../../constants/constants.ts'

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
            href: `/chats`
          })
        ],
        events: {
          submit: (event: unknown) => handleSubmit(event as SubmitEvent, this),
          blur: () => handleBlur(this)
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
  const errors = validateForm(data as LoginFormDataType)
  if (errors) {
    console.error(errors)
  }
}
const handleBlur = (context: Block) => {
  console.log('blur: ')
  validate(context)
}
const handleSubmit = (e: SubmitEvent, context: Block) => {
  e.preventDefault()
  console.log('submit: ')
  validate(context)
}

export const LoginPage = new LoginPageClass({
  attributes: { class: 'login-page' }
})
