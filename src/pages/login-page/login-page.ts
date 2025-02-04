import './login-page.css'

import { default as LoginPageTemplate } from './login-page.hbs?raw'
import { PropsType } from '../../types/types.ts'
import Block from '../../services/block.ts'
import FormButton from '../../components/form-button/form-button.ts'
import Link from '../../components/link/link.ts'

type Props = PropsType

class LoginPageClass extends Block {
  constructor(props: Props) {
    super(props)

    // if (!this.children.form) {
    //   this.children.form = new Form({ name: 'loginForm', title: 'Вход' })
    // }
    if (!this.children.formButton) {
      this.children.form = new FormButton({
        name: 'login-submit',
        title: 'Войти'
      })
    }
    if (!this.children.link) {
      this.children.form = new Link({
        title: 'Нет аккаунта?',
        href: `/chats`
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
