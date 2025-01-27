import { ProfileFormDetails } from './components/profile-form-details/profile-form-details.ts'
import { ProfileFormField } from './components/profile-form-field/profile-form-field.ts'
import { ProfilePageAvatarUpload } from './components/profile-page-avatar-upload/profile-page-avatar-upload.ts'
import { ProfilePageContent } from './components/profile-page-content/profile-page-content.ts'
import { ProfilePageLayout } from './components/profile-page-layout/profile-page-layout.ts'
import { ProfileFormEditLayout } from './components/profile-page-form-edit-layout/profile-page-form-edit-layout.ts'
import { registerTemplate } from '../../utils/register-template.ts'

registerTemplate({
  ProfileFormDetails,
  ProfileFormField,
  ProfilePageAvatarUpload,
  ProfilePageContent,
  ProfilePageLayout,
  ProfileFormEditLayout
})

export { default as ProfilePage } from './profile-page.hbs?raw'
export { ProfilePageEdit } from './profile-page-edit/profile-page-edit.ts'
export { ProfilePageChangePswd } from './profile-page-change-pswd/profile-page-change-pswd.ts'
