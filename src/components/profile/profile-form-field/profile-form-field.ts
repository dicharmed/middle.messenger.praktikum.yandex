import './profile-form-field.css'
import { default as ProfileFormFieldTemplate } from './profile-form-field.hbs?raw'
import Block from '../../../services/block.ts'
import { FormElementType, PropsType } from '../../../types/types.ts'
import ProfileEditInput from '../profile-edit-input/profile-edit-input.ts'

type Props = PropsType & {
  field: FormElementType
}
export default class ProfileFormField extends Block {
  constructor(props: Props) {
    const { field, ...rest } = props
    super({
      ...rest,
      attributes: { class: 'profile-form-field' }
    })
    if (!this.children.input) {
      this.children.input = new ProfileEditInput({ inputProps: field })
    }
  }

  getValue() {
    return (this.children.input as ProfileEditInput).getValue()
  }

  render() {
    return this.compile(ProfileFormFieldTemplate, this.props)
  }
}
