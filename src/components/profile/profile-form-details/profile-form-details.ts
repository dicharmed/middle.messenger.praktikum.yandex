import { default as ProfileFormDetailsTemplate } from './profile-form-details.hbs?raw'
import { PropsType } from '../../../types/types.ts'
import Block from '../../../services/block.ts'
import { profileFormFields } from '../../../constants/constants.ts'
import ProfileFormField from '../profile-form-field/profile-form-field.ts'
import ProfileEditInput from '../profile-edit-input/profile-edit-input.ts'

export default class ProfileFormDetails extends Block {
  constructor(props: PropsType) {
    super(props)

    if (!this.lists.detailsList) {
      this.lists.detailsList = profileFormFields.map(field => {
        return new ProfileFormField({ field })
      })
    }
  }

  getValues = () => {
    const values = {}
    this.lists.detailsList.forEach(element => {
      const el = (element as Block).children.input
      const name = el.props.attributes!.name as string
      const input = el as ProfileEditInput

      Object.assign(values, {
        [name]: input.getValue()
      })
    })
    return values
  }

  render() {
    return this.compile(ProfileFormDetailsTemplate, this.props)
  }
}
