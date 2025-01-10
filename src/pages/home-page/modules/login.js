import './login.css'
import { formInput } from '../../../components/form/form-input/form-input.js'

export const login = `
    <div class="auth-page">
        <form class="form">
                <h1 class="form__title">Вход</h1>
                <div class="form-content">
                    {{> formInput name="login" type="text" title="Логин"}}
                    {{> formInput name="password" type="password" title="Пароль"}}
                </div>
                <div class="form-actions">
                    <input class="button" type="submit" value="Войти">
                    <a class="link" href="#">Нет аккаунта?</a>
                </div>
        </form>
    </div>
`
