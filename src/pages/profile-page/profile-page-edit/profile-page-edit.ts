import { default as ProfilePageEditTemplate } from './profile-page-edit.hbs?raw'
import Block from '../../../services/block.ts'
import { PropsType } from '../../../types/types.ts'
import ProfilePageAvatarUpload from '../components/profile-page-avatar-upload/profile-page-avatar-upload.ts'
import ButtonArrow from '../../../components/button-arrow/button-arrow.ts'
import ProfileFormDetails from '../components/profile-form-details/profile-form-details.ts'

class ProfilePageEditClass extends Block {
  constructor(props: PropsType) {
    super(props)

    if (!this.children.profilePageAvatarUpload) {
      this.children.profilePageAvatarUpload = new ProfilePageAvatarUpload({})
    }
    if (!this.children.profileFormDetails) {
      this.children.profileFormDetails = new ProfileFormDetails({})
    }
    if (!this.children.buttonForm) {
      this.children.buttonForm = new ButtonArrow({ title: 'Сохранить' })
    }
  }

  render() {
    return this.compile(ProfilePageEditTemplate, this.props)
  }
}

export const ProfilePageEdit = new ProfilePageEditClass({})
