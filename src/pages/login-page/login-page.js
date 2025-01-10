import './login-page.css'
import { FormInput } from '../../components/form/form-input/form-input.js'
import { FormButton } from '../../components/form/form-button/form-button.js'
import { FormLink } from '../../components/form/form-link/form-link.js'
import { FormElement } from '../../components/form/form.js'
import Handlebars from 'handlebars'

const loginContent = `{{> formInput name="login" type="text" title="Логин"}}{{> formInput name="password" type="password" title="Пароль"}}`

const loginActions = `{{> formButton title="Войти"}}{{> formLink title="Нет аккаунта?" url="#"}}`

Handlebars.registerPartial('loginContent', loginContent)
Handlebars.registerPartial('loginActions', loginActions)

export const loginPage = `
    <div class="auth-page">
            {{#> formElement title="Вход" user=true}}
                {{> loginContent}}
                {{> loginActions}}      
            {{/ formElement }}
    </div>
`
