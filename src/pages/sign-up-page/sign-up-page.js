import { default as SignUpPageActions } from './components/sign-up-page-actions.hbs?raw'
import { default as SignUpPageContent } from './components/sign-up-page-content.hbs?raw'
import { registerTemplate } from '../../utils/register-template.js'
import './sign-up-page.css'

registerTemplate({ SignUpPageActions, SignUpPageContent })

export { default as SignUpPage } from './sign-up-page.hbs?raw'
