import './profile-avatar-upload.css'
import Block from '../../../services/block.ts'
import { PropsType } from '../../../types/types.ts'
import { default as ProfilePageAvatarUploadTemplate } from './profile-avatar-upload.hbs?raw'

export default class ProfileAvatarUpload extends Block {
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
