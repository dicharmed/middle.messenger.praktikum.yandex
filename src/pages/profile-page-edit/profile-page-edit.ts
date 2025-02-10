import { default as ProfilePageEditTemplate } from './profile-page-edit.hbs?raw'
import Block from '../../services/block.ts'
import { ProfileFormEditPswdDataType, PropsType } from '../../types/types.ts'
import '../profile-page/profile-page.css'

import ProfileEditLayout from '../../components/profile/profile-edit-layout/profile-edit-layout.ts'
import { profileFormFields } from '../../constants/constants.ts'
import ProfileFormField from '../../components/profile/profile-form-field/profile-form-field.ts'
import { validateForm } from '../../utils/validate-form.ts'
import { FORM_FIELDS_NAMES } from '../../constants/enums.ts'
import ProfileEditInput from '../../components/profile/profile-edit-input/profile-edit-input.ts'

class ProfilePageEditClass extends Block {
  constructor(props: PropsType) {
    super(props)

    if (!this.children.profileEditLayout) {
      this.children.profileEditLayout = new ProfileEditLayout({
        content: profileFormFields.map(field => {
          return new ProfileFormField({ field })
        }),
        formButtonName: 'profile-page-edit-btn',
        events: {
          submit: (e: unknown) => handleSubmit(e as SubmitEvent, this),
          blur: (e: unknown) => handleBlur(e as FocusEvent, this)
        }
      })
    }
  }

  render() {
    return this.compile(ProfilePageEditTemplate, this.props)
  }
}

export const ProfilePageEdit = new ProfilePageEditClass({})

const getValues = (context: Block) => {
  const values = {}
  const editFieldsList = context.children.profileEditLayout.lists.content
  editFieldsList.forEach(element => {
    const el = (element as Block).children.input
    const name = el.props.attributes!.name as string
    const input = el as ProfileFormField

    Object.assign(values, {
      [name]: input.getValue()
    })
  })
  return values
}

const validate = (context: Block) => {
  const data = getValues(context)
  return validateForm(data as ProfileFormEditPswdDataType)
}
const handleError = (event: Event, context: Block) => {
  if (event.target instanceof HTMLInputElement) {
    const name = event.target.name as FORM_FIELDS_NAMES

    const field = context.children.profileEditLayout.lists.content.find(
      item => {
        return (
          (item as ProfileEditInput).children.input.props.attributes!.name ===
          name
        )
      }
    ) as ProfileFormField

    field.setProps({
      error: { message: validate(context)![name] }
    })
  }
}
const handleSubmit = (event: SubmitEvent, context: Block) => {
  event.preventDefault()
  handleError(event, context)
}

const handleBlur = (event: FocusEvent, context: Block) => {
  handleError(event, context)
}
