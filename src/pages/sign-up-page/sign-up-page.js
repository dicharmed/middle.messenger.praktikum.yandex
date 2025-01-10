import { FormInput } from '../../components/form/form-input/form-input.js'
import { FormButton } from '../../components/form/form-button/form-button.js'
import { FormLink } from '../../components/form/form-link/form-link.js'
import { FormElement } from '../../components/form/form.js'
import Handlebars from 'handlebars'

const signUpContent = `
{{> formInput name="email" type="text" title="Почта"}}{{> formInput name="login" type="text" title="Логин"}}
{{> formInput name="first_name" type="text" title="Имя"}}
{{> formInput name="second_name" type="text" title="Фамилия"}}
{{> formInput name="phone" type="text" title="Телефон"}}
{{> formInput name="password" type="password" title="Пароль"}}
{{> formInput name="password" type="password" title="Пароль еще раз"}}
`

const signUpActions = `{{> formButton title="Зарегистрироваться"}}{{> formLink title="Войти" url="#"}}`

Handlebars.registerPartial('signUpContent', signUpContent)
Handlebars.registerPartial('signUpActions', signUpActions)

export const signUpPage = `
            {{#> formElement title="Регистрация" user=false}}
                {{> signUpContent}}
                {{> signUpActions}}      
            {{/ formElement }}
`
Handlebars.registerPartial('signUpPage', signUpPage)
