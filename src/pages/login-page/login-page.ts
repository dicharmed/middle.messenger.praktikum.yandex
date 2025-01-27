import { default as LoginPageActions } from './components/login-page-actions.hbs?raw'
import { default as LoginPageContent } from './components/login-page-content.hbs?raw'
import { registerTemplate } from '../../utils/register-template.ts'
import './login-page.css'

registerTemplate({ LoginPageActions, LoginPageContent })

export { default as LoginPage } from './login-page.hbs?raw'
