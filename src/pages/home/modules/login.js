import './login.css'

export const login = `
    <form class="form">
            <h3 class="title">Вход</h3>
            <div class="field">
                 <input type="text" name="login">
                 <div class="underline"></div>
                 <label>Логин</label>
            </div>
            <div class="field">
                <input type="password" name="password">
                <div class="underline"></div>
                <label>Пароль</label>
            </div>
            
            <div class="actions">
                <input class="button" type="submit" value="Войти">
                <a class="link" href="#">Нет аккаунта?</a>
            </div>
    </form>
`
