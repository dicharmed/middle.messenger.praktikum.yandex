import './profile-form-field.css'
import { default as ProfileFormFieldTemplate } from './profile-form-field.hbs?raw'
import Block from '../../../../services/block.ts'
import { FormElementType, PropsType } from '../../../../types/types.ts'
import ProfilePageEditInput from '../../profile-page-edit/components/profile-page-edit-input/profile-page-edit-input.ts'

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
      this.children.input = new ProfilePageEditInput({ inputProps: field })
    }
  }

  render() {
    return this.compile(ProfileFormFieldTemplate, this.props)
  }
}
