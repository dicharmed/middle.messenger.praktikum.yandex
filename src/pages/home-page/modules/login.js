import './login.css'
import { formInput } from '../../../components/form/form-input/form-input.js'

export const login = `
    <form class="form">
            <h3 class="title">Вход</h3>
            {{> formInput }}
<!--            <div class="field">-->
<!--                <input type="password" name="password">-->
<!--                <div class="underline"></div>-->
<!--                <label>Пароль</label>-->
<!--            </div>-->
            <div class="actions">
                <input class="button" type="submit" value="Войти">
                <a class="link" href="#">Нет аккаунта?</a>
            </div>
    </form>
`
