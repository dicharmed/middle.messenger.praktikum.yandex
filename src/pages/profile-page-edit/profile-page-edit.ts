import { default as ProfilePageEditTemplate } from './profile-page-edit.hbs?raw'
import Block from '../../services/block.ts'
import { PropsType } from '../../types/types.ts'
import ButtonArrow from '../../components/button-arrow/button-arrow.ts'
import ProfileFormDetails from '../../components/profile/profile-form-details/profile-form-details.ts'
import ProfileAvatarUpload from '../../components/profile/profile-avatar-upload/profile-avatar-upload.ts'
import '../profile-page/profile-page.css'
import FormButton from '../../components/form-button/form-button.ts'

class ProfilePageEditClass extends Block {
  constructor(props: PropsType) {
    super(props)

    if (!this.children.profilePageAvatarUpload) {
      this.children.profilePageAvatarUpload = new ProfileAvatarUpload({})
    }
    if (!this.children.profileFormDetails) {
      this.children.profileFormDetails = new ProfileFormDetails({})
    }
    if (!this.children.buttonForm) {
      this.children.buttonForm = new FormButton({
        title: 'Сохранить',
        name: 'profile-page-edit-btn'
      })
    }
    if (!this.children.buttonArrow) {
      this.children.buttonArrow = new ButtonArrow({ direction: 'left' })
    }
  }

  render() {
    return this.compile(ProfilePageEditTemplate, this.props)
  }
}

export const ProfilePageEdit = new ProfilePageEditClass({
  attributes: { class: 'profile-page' }
})
