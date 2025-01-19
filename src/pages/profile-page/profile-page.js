import { ProfileFormDetails } from './components/profile-form-details/profile-form-details.js'
import { ProfileFormField } from './components/profile-form-field/profile-form-field.js'
import { ProfilePageAvatarUpload } from './components/profile-page-avatar-upload/profile-page-avatar-upload.js'
import { ProfilePageContent } from './components/profile-page-content/profile-page-content.js'
import { ProfilePageLayout } from './components/profile-page-layout/profile-page-layout.js'
import { ProfileFormEditLayout } from './components/profile-page-form-edit-layout/profile-page-form-edit-layout.js'
import { registerTemplate } from '../../utils/register-template.js'

registerTemplate({
  ProfileFormDetails,
  ProfileFormField,
  ProfilePageAvatarUpload,
  ProfilePageContent,
  ProfilePageLayout,
  ProfileFormEditLayout
})

export { default as ProfilePage } from './profile-page.hbs?raw'
export { ProfilePageEdit } from './profile-page-edit/profile-page-edit.js'
export { ProfilePageChangePswd } from './profile-page-change-pswd/profile-page-change-pswd.js'
