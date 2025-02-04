import { default as ProfileFormDetailsTemplate } from './profile-form-details.hbs?raw'
import { PropsType } from '../../../types/types.ts'
import Block from '../../../services/block.ts'
import { loginFormFields } from '../../../constants/constants.ts'
import ProfileFormField from '../profile-form-field/profile-form-field.ts'

export default class ProfileFormDetails extends Block {
  constructor(props: PropsType) {
    super(props)

    if (!this.lists.detailsList) {
      this.lists.detailsList = loginFormFields.map(field => {
        return new ProfileFormField({ field })
      })
    }
  }

  render() {
    return this.compile(ProfileFormDetailsTemplate, this.props)
  }
}
