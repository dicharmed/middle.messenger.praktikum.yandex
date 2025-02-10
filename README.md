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

## Sprint 2

- Внедрен TypeScript.
- Добавлен компонентный подход в проект при помощи реализаций блока (Block) и Event Bus.
- Сделан сбор данных из форм. В console.log выводится объект со всеми заполненными полями формы.
- Добавлена валидация на все формы.
- Добавлен класс для работы с запросами средствами Promise и XHR:
  - Реализованы методы GET, POST, PUT, DELETE;
  - Добавлена работа с query string в GET-запросе.
- Добавлен ESLint.
- Добавлен Stylelint.
## **Установка**

- `npm install` —  Установка стабильной версии.
- `npm run dev` — Запускает Vite в режиме разработки.
- `npm run start` — Собирает проект с помощью vite build.
- `npm run preview` — Запускает предварительный просмотр собранного проекта (vite preview).
- `npm run lint:typecheck` - Проверяет TypeScript-код на ошибки (tsc --noEmit).
- `npm run lint:ts` - Проверяет код с помощью ESLint.
- `npm run lint:css` - Проверяет CSS с помощью Stylelint.
- `npm run format:ts` - Форматирует файлы .ts с помощью Prettier.
- `npm run format:css` - Исправляет ошибки форматирования CSS через Stylelint.
- `npm run prepare` - Устанавливает хуки Husky для Git.



