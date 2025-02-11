export enum EVENTS {
  INIT = 'init',
  FLOW_CDM = 'flow:component-did-mount',
  FLOW_CDU = 'flow:component-did-update',
  FLOW_RENDER = 'flow:render'
}
export enum SIZE {
  small = 'small',
  medium = 'medium',
  large = 'large'
}
export enum HELPERS {
  compare = 'compare'
}
export enum NAV_LINKS {
  home = 'Главная',
  login = 'Авторизация',
  signUp = 'Регистрация',
  chats = 'Чаты',
  profile = 'Профиль',
  profileEdit = 'Изменить профиль',
  profilePasswordChange = 'Изменить пароль'
}
export enum FORM_FIELDS_NAMES {
  email = 'email',
  login = 'login',
  first_name = 'first_name',
  second_name = 'second_name',
  display_name = 'display_name',
  phone = 'phone',
  password = 'password',
  passwordCheck = 'passwordCheck',
  oldPassword = 'oldPassword',
  newPassword = 'newPassword',
  newPasswordControl = 'newPasswordControl',
  message = 'message'
}
export enum ROUTES {
  LOGIN = '/',
  SIGNUP = '/sign-up',
  CHATS = '/messenger',
  PROFILE = '/settings',
  PROFILE_EDIT = '/settings/edit',
  PROFILE_EDIT_PASSWORD = '/settings/edit-password',
  INTERNAL_SERVER = '/500',
  NOT_FOUND = '*'
}
