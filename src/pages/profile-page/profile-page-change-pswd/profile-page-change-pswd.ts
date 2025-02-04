import { default as ProfilePageChangePswdTemplate } from './profile-page-change-pswd.hbs?raw'
import Block from '../../../services/block.ts'
import { PropsType } from '../../../types/types.ts'
import Avatar from '../../../components/avatar/avatar.ts'
import { profileFormEditFields } from '../../../constants/constants.ts'
import ProfileFormField from '../components/profile-form-field/profile-form-field.ts'
import ButtonArrow from '../../../components/button-arrow/button-arrow.ts'

class ProfilePageChangePswdClass extends Block {
  constructor(props: PropsType) {
    super(props)

    if (!this.children.avatar) {
      this.children.avatar = new Avatar({})
    }

    if (!this.lists.editFieldsList) {
      this.lists.editFieldsList = profileFormEditFields.map(field => {
        return new ProfileFormField({ name: '', field })
      })
    }
    if (!this.children.buttonForm) {
      this.children.buttonForm = new ButtonArrow({ title: 'Сохранить' })
    }
  }

  render() {
    return this.compile(ProfilePageChangePswdTemplate, this.props)
  }
}
export const ProfilePageChangePswd = new ProfilePageChangePswdClass({})
