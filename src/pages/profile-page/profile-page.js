import Handlebars from 'handlebars'
import './profile-page.css'
import { ButtonArrow } from '../../components/button-arrow/button-arrow.js'
import { ProfileContent } from './components/profile-content/profile-content.js'

export const ProfilePage = `
<div class="profile-page">
    <div class="profile-page-back-to">
        {{> buttonArrow left=true }}
    </div>
    <div>{{> profileContent}}</div>
</div>
`

Handlebars.registerPartial('profilePage', ProfilePage)
