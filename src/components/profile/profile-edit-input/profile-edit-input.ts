import Block from '../../../services/block.ts'
import { FormElementType, PropsType } from '../../../types/types.ts'
import './profile-edit-input.css'

type Props = PropsType & {
  inputProps: FormElementType
}
export default class ProfileEditInput extends Block {
  constructor(props: Props) {
    const { inputProps, ...rest } = props
    super({
      ...rest,
      tagName: 'input',
      attributes: { class: 'input-form-edit', ...inputProps }
    })
  }

  render() {
    return this.compile('', this.props)
  }
}
