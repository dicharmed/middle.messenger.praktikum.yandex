import { default as ProfilePageChangePswdTemplate } from './profile-change-pswd-page.hbs?raw'
import Block from '../../services/block.ts'
import { ProfileFormEditPswdDataType, PropsType } from '../../types/types.ts'
import ProfileFormField from '../../components/profile/profile-form-field/profile-form-field.ts'
import '../profile-page/profile-page.css'
import ProfileEditLayout from '../../components/profile/profile-edit-layout/profile-edit-layout.ts'
import { ProfileFormEdit } from '../../components/profile/profile-form-edit/profile-form-edit.ts'
import { profileFormEditPswdFields } from '../../constants/constants.ts'
import { validateForm } from '../../utils/validateForm.ts'

class ProfileChangePswdClass extends Block {
  constructor(props: PropsType) {
    super(props)

    if (!this.children.profileEditLayout) {
      this.children.profileEditLayout = new ProfileEditLayout({
        content: new ProfileFormEdit(this.ProfileFormEditProps)
      })
    }
  }
  ProfileFormEditProps = {
    content: profileFormEditPswdFields.map(field => {
      return new ProfileFormField({ field })
    }),
    formButtonName: 'profile-form-pswd-change-btn',
    events: {
      submit: (e: unknown) => handleSubmit(e as SubmitEvent, this),
      blur: () => handleBlur(this)
    }
  }

  render() {
    return this.compile(ProfilePageChangePswdTemplate, this.props)
  }
}
export const ProfileChangePswdPage = new ProfileChangePswdClass({})

const getValues = (context: Block) => {
  const values = {}
  const editFieldsList =
    context.children.profileEditLayout.children.content.lists.content

  editFieldsList.forEach(element => {
    const el = (element as Block).children.input
    const name = el.props.attributes!.name as string
    const input = el as ProfileFormField

    Object.assign(values, {
      [name]: input.getValue()
    })
  })
  console.log('values: ', values)
  return values
}

const validate = (context: Block) => {
  const data = getValues(context)
  const errors = validateForm(data as ProfileFormEditPswdDataType)
  if (errors) {
    console.error(errors)
  }
}
const handleSubmit = (e: SubmitEvent, context: Block) => {
  e.preventDefault()
  console.log('submit')
  validate(context)
}

const handleBlur = (context: Block) => {
  console.log('blur')
  validate(context)
}
