import './sign-up-page.css'
import { PropsType, SignUpFormDataType } from '../../types/types.ts'
import Block from '../../services/block.ts'
import Form from '../../components/form/form.ts'
import FormInput from '../../components/form-input/form-input.ts'
import FormButton from '../../components/form-button/form-button.ts'
import Link from '../../components/link/link.ts'

import { default as SignUpPageTemplate } from './sign-up-page.hbs?raw'
import { signUpFormFields } from '../../constants/constants.ts'
import { validateForm } from '../../utils/validateForm.ts'

type Props = PropsType

class SignUpPageClass extends Block {
  constructor(props: Props) {
    super(props)

    signUpFormFields.forEach(field => {
      this.children[field.name] = new FormInput({ ...field })
    })

    if (!this.children.form) {
      this.children.form = new Form({
        title: 'Вход',
        formProps: { name: 'loginForm' },
        content: signUpFormFields.map(field => {
          return this.children[field.name]
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
        ],
        events: {
          submit: (event: unknown) => handleSubmit(event as SubmitEvent, this)
        }
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

const getFieldsValues = (context: Block) => {
  const values = {}
  signUpFormFields.forEach(field => {
    Object.assign(values, {
      [field.name]: (context.children[field.name] as FormInput).getValue()
    })
  })
  return values
}
const validate = (context: Block) => {
  const data = getFieldsValues(context)
  const errors = validateForm(data as SignUpFormDataType)
  if (errors) {
    console.error(errors)
  }
}
const handleSubmit = (e: SubmitEvent, context: Block) => {
  e.preventDefault()
  console.log('SignUp form: ', validate(context))
}
