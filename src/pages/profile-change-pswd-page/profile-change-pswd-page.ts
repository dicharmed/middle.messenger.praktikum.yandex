import { default as ProfilePageChangePswdTemplate } from './profile-change-pswd-page.hbs?raw'
import Block from '../../services/block.ts'
import { PropsType } from '../../types/types.ts'
import Avatar from '../../components/avatar/avatar.ts'
import { profileFormEditFields } from '../../constants/constants.ts'
import ProfileFormField from '../../components/profile/profile-form-field/profile-form-field.ts'
import ButtonArrow from '../../components/button-arrow/button-arrow.ts'

class ProfileChangePswdClass extends Block {
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
export const ProfileChangePswdPage = new ProfileChangePswdClass({})
