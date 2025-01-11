import { signUpPage } from '../sign-up-page/sign-up-page.js'
import { loginPage } from '../login-page/login-page.js'
import { ChatLeftSide } from '../chats-page/components/chat-left-side/chat-left-side.js'
import './home-page.css'

export const homePage = `
<!--    <div class="wrapper">-->
<!--        {{#if user}}-->
<!--            {{> loginPage }}-->
<!--        {{else}}-->
<!--            {{> signUpPage}}-->
<!--        {{/if}}-->
<!--    </div>-->

{{> chatLeftSide}}
`
