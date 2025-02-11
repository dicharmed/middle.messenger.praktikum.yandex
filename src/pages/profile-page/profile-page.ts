import { PropsType } from '../../types/types.ts'
import Block from '../../services/block.ts'
import { default as ProfilePageTemplate } from './profile-page.hbs?raw'
import Avatar from '../../components/avatar/avatar.ts'

import './profile-page.css'
import ButtonArrow from '../../components/button-arrow/button-arrow.ts'
import ProfileFormDetails from '../../components/profile/profile-form-details/profile-form-details.ts'
import { router } from '../../services/router.ts'
import Link from '../../components/link/link.ts'
import { ROUTES } from '../../constants/enums.ts'

type Props = PropsType

class ProfilePageClass extends Block {
  constructor(props: Props) {
    super(props)

    if (!this.children.avatar) {
      this.children.avatar = new Avatar({})
    }

    if (!this.children.profileFormDetails) {
      this.children.profileFormDetails = new ProfileFormDetails({
        disabled: true
      })
    }
    if (!this.children.buttonArrow) {
      this.children.buttonArrow = new ButtonArrow({
        direction: 'left',
        events: {
          click: (e: unknown) => {
            ;(e as MouseEvent).preventDefault()
            router.back()
          }
        }
      })
    }
    if (!this.children.editData) {
      this.children.editData = new Link({
        pathName: ROUTES.PROFILE_EDIT,
        title: 'Изменить данные',
        attributes: { class: 'profile-page-content-actions__item' }
      })
    }
    if (!this.children.editPassword) {
      this.children.editPassword = new Link({
        pathName: ROUTES.PROFILE_EDIT_PASSWORD,
        title: 'Изменить пароль',
        attributes: { class: 'profile-page-content-actions__item' }
      })
    }
    if (!this.children.exit) {
      this.children.exit = new Link({
        pathName: ROUTES.LOGIN,
        title: 'Выйти',
        attributes: {
          class:
            'profile-page-content-actions__item profile-page-content-actions__item_red'
        }
      })
    }
  }

  render() {
    return this.compile(ProfilePageTemplate, this.props)
  }
}

export const ProfilePage = new ProfilePageClass({
  attributes: { class: 'profile-page' }
})
