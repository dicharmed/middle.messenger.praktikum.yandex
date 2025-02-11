import './sign-up-page.css'
import { PropsType, SignUpFormDataType } from '../../types/types.ts'
import Block from '../../services/block.ts'
import Form from '../../components/form/form.ts'
import FormInput from '../../components/form-input/form-input.ts'
import FormButton from '../../components/form-button/form-button.ts'
import Link from '../../components/link/link.ts'

import { default as SignUpPageTemplate } from './sign-up-page.hbs?raw'
import { signUpFormFields } from '../../constants/constants.ts'
import { validateForm } from '../../utils/validate-form.ts'
import { FORM_FIELDS_NAMES, ROUTES } from '../../constants/enums.ts'
import setFormErrors from '../../utils/set-form-errors.ts'

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
            pathName: ROUTES.LOGIN
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
  return validateForm(data as SignUpFormDataType)
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

const handleSubmit = (e: SubmitEvent, context: Block) => {
  e.preventDefault()
  handleError(e, context)
}
const handleBlur = (e: FocusEvent, context: Block) => {
  handleError(e, context)
}
