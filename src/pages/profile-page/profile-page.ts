import { PropsType } from '../../types/types.ts'
import Block from '../../services/block.ts'
import { default as ProfilePageTemplate } from './profile-page.hbs?raw'
import Avatar from '../../components/avatar/avatar.ts'
import ProfileFormDetails from './components/profile-form-details/profile-form-details.ts'
import './profile-page.css'
import ButtonArrow from '../../components/button-arrow/button-arrow.ts'

type Props = PropsType

class ProfilePageClass extends Block {
  constructor(props: Props) {
    super(props)

    if (!this.children.avatar) {
      this.children.avatar = new Avatar({})
    }

    if (!this.children.profileFormDetails) {
      this.children.profileFormDetails = new ProfileFormDetails({})
    }
    if (!this.children.buttonArrow) {
      this.children.buttonArrow = new ButtonArrow({ direction: 'left' })
    }
  }

  render() {
    return this.compile(ProfilePageTemplate, this.props)
  }
}

export const ProfilePage = new ProfilePageClass({
  attributes: { class: 'profile-page' }
})
