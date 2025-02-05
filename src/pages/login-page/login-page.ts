import './login-page.css'

import { default as LoginPageTemplate } from './login-page.hbs?raw'
import { PropsType } from '../../types/types.ts'
import Block from '../../services/block.ts'
import FormButton from '../../components/form-button/form-button.ts'
import Link from '../../components/link/link.ts'
import Form from '../../components/form/form.ts'
import FormInput from '../../components/form-input/form-input.ts'

const handleSubmit = (e: SubmitEvent, context: Block) => {
  e.preventDefault()
  console.log('login form: ', {
    login: (context.children.login as FormInput).getValue(),
    password: (context.children.password as FormInput).getValue()
  })
}

type Props = PropsType

class LoginPageClass extends Block {
  constructor(props: Props) {
    super(props)

    this.children.login = new FormInput({
      name: 'login',
      type: 'text',
      label: 'Логин'
    })
    this.children.password = new FormInput({
      name: 'password',
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
          submit: (event: unknown) => handleSubmit(event as SubmitEvent, this)
        }
      })
    }
  }

  render() {
    return this.compile(LoginPageTemplate, this.props)
  }
}

export const LoginPage = new LoginPageClass({
  attributes: { class: 'login-page' }
})
