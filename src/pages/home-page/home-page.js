import { signUpPage } from '../sign-up-page/sign-up-page.js'
import { loginPage } from '../login-page/login-page.js'
import { DialogPreview } from '../chats-page/components/dialog-preview/dialog-preview.js'
import './home-page.css'

export const homePage = `
<!--    <div class="wrapper">-->
<!--        {{#if user}}-->
<!--            {{> loginPage }}-->
<!--        {{else}}-->
<!--            {{> signUpPage}}-->
<!--        {{/if}}-->
<!--    </div>-->

{{> dialogPreview}}
`
