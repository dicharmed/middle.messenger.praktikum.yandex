import './profile-page-avatar-upload.css'
import Block from '../../../../services/block.ts'
import { PropsType } from '../../../../types/types.ts'
import { default as ProfilePageAvatarUploadTemplate } from './profile-page-avatar-upload.hbs?raw'

export default class ProfilePageAvatarUpload extends Block {
  constructor(props: PropsType) {
    super({
      ...props,
      attributes: { class: 'avatar-upload' }
    })
  }

  render() {
    return this.compile(ProfilePageAvatarUploadTemplate, this.props)
  }
}
