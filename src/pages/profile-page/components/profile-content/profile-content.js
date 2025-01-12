import Handlebars from 'handlebars'
import './profile-content.css'

export const ProfileContent = `
<div class="profile-content">
    <div class="profile-content-header">
        <img class="profile-content-header__avatar" src="#" alt="avatar"/>
        <h2 class="profile-content-header__name">Name</h2>
    </div>

    <div class="profile-content-info">
        <div>
            <h3 class="profile-content-info__title">Почта</h3>
            <h3 class="profile-content-info__title">Логин</h3>
            <h3 class="profile-content-info__title">Фамилия</h3>
            <h3 class="profile-content-info__title">Имя</h3>
            <h3 class="profile-content-info__title">Имя в чате</h3>
            <h3 class="profile-content-info__title">Телефон</h3>
        </div>
        <div>
            <h3 class="profile-content-info__desc">pochta@yandex.ru</h3>
            <h3 class="profile-content-info__desc">ivanivanov</h3>
            <h3 class="profile-content-info__desc">Иван</h3>
            <h3 class="profile-content-info__desc">Иванов</h3>
            <h3 class="profile-content-info__desc">Иван</h3>
            <h3 class="profile-content-info__desc">+7 (909) 967 30 30</h3>
        </div>
    </div>
    <div class="profile-content-actions">
        <button class="profile-content-actions__item">Изменить данные</button>
        <button class="profile-content-actions__item">Изменить пароль</button>
        <button class="profile-content-actions__item profile-content-actions__item_red">Выйти</button>
    </div>
</div>
`
Handlebars.registerPartial('profileContent', ProfileContent)
