## Проектная работа

Веб-приложение «Чат»


## Sprint 1

- Дизайн приложения разработан на основе [шаблона](https://www.figma.com/design/jF5fFFzgGOxQeB4CmKWTiE/Chat_external_link?node-id=0-1&p=f&t=eMc95SC7xAUkVr5a-0) в Figma.
- Разработаны страницы приложения с использованием шаблонизатора Handlebars:
  - Авторизация (с формой, имена полей: `login`, `password`). 
  - Регистрация (с формой, имена полей: `first_name`, `second_name`, `login`, `email`, `password`, `phone`).
  - Список чатов и лента переписки (имя поля для ввода сообщения: `message`).
  - Настройки пользователя:
    - Имена полей для изменения информации о пользователе: `first_name`, `second_name`, `display_name`, `login`, `email`, `phone`; 
    - Поле для изменения аватара: `avatar`; 
    - Поля для изменения пароля: `oldPassword`, `newPassword`.
  - Страница 404. 
  - Страница 5**.
- Приложение автоматически развертывается в [Netlify](https://lambent-buttercream-3396e3.netlify.app/).

## **Установка**

- `npm install` — установка стабильной версии,
- `npm run dev` — запуск версии для разработчика,
- `npm run start` — сборка стабильной версии.




