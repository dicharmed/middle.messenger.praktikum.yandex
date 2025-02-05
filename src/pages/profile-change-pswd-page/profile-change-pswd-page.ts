import { default as ProfilePageChangePswdTemplate } from './profile-change-pswd-page.hbs?raw'
import Block from '../../services/block.ts'
import { PropsType } from '../../types/types.ts'
import Avatar from '../../components/avatar/avatar.ts'
import { profileFormEditFields } from '../../constants/constants.ts'
import ProfileFormField from '../../components/profile/profile-form-field/profile-form-field.ts'
import ButtonArrow from '../../components/button-arrow/button-arrow.ts'
import FormButton from '../../components/form-button/form-button.ts'
import '../profile-page/profile-page.css'

class ProfileChangePswdClass extends Block {
  constructor(props: PropsType) {
    super(props)

    if (!this.children.avatar) {
      this.children.avatar = new Avatar({})
    }

    if (!this.lists.editFieldsList) {
      this.lists.editFieldsList = profileFormEditFields.map(field => {
        return new ProfileFormField({ field })
      })
    }
    if (!this.children.buttonForm) {
      this.children.buttonForm = new FormButton({
        title: 'Сохранить',
        name: 'profile-change-pswd-form'
      })
    }
    if (!this.children.buttonArrow) {
      this.children.buttonArrow = new ButtonArrow({ direction: 'left' })
    }
  }

  getValues = () => {
    const values = {}
    this.lists.editFieldsList.forEach(element => {
      const el = (element as Block).children.input
      const name = el.props.attributes!.name as string
      const input = el as ProfileFormField

      Object.assign(values, {
        [name]: input.getValue()
      })
    })
    return values
  }

  render() {
    return this.compile(ProfilePageChangePswdTemplate, this.props)
  }
}
export const ProfileChangePswdPage = new ProfileChangePswdClass({
  attributes: { class: 'profile-page' }
})

console.log(ProfileChangePswdPage.getValues())
