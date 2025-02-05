import './sign-up-page.css'
import { PropsType } from '../../types/types.ts'
import Block from '../../services/block.ts'
import Form from '../../components/form/form.ts'
import FormInput from '../../components/form-input/form-input.ts'
import FormButton from '../../components/form-button/form-button.ts'
import Link from '../../components/link/link.ts'

import { default as SignUpPageTemplate } from './sign-up-page.hbs?raw'
import { signUpFormFields } from '../../constants/constants.ts'

type Props = PropsType

class SignUpPageClass extends Block {
  constructor(props: Props) {
    super(props)

    if (!this.children.form) {
      this.children.form = new Form({
        title: 'Вход',
        formProps: { name: 'loginForm' },
        content: signUpFormFields.map(field => {
          return new FormInput({ ...field })
        }),
        actions: [
          new FormButton({
            name: 'signup-submit',
            title: 'Зарегистрироваться'
          }),
          new Link({
            title: 'Войти',
            href: `/login`
          })
        ]
      })
    }
  }

  render() {
    return this.compile(SignUpPageTemplate, this.props)
  }
}

export const SignUpPage = new SignUpPageClass({
  attributes: { class: 'sign-up-page' }
})
