import { FormElementType, LinkType } from '../types/types.ts'
import { FORM_FIELDS_NAMES, NAV_LINKS } from './enums.ts'

export const navLinks: Array<LinkType> = [
  { title: NAV_LINKS.home, href: '/' },
  { title: NAV_LINKS.login, href: '/login' },
  { title: NAV_LINKS.signUp, href: '/sign-up' },
  { title: NAV_LINKS.chats, href: '/chats' },
  { title: NAV_LINKS.profile, href: '/profile' },
  { title: NAV_LINKS.profileEdit, href: '/profile/edit' },
  { title: NAV_LINKS.profilePasswordChange, href: '/profile/change-password' }
]
export const loginFormFields: Array<FormElementType> = [
  { name: FORM_FIELDS_NAMES.login, type: 'text', label: 'Логин' },
  { name: FORM_FIELDS_NAMES.password, type: 'password', label: 'Пароль' }
]
export const signUpFormFields: Array<FormElementType> = [
  { name: FORM_FIELDS_NAMES.email, type: 'text', label: 'Почта' },
  { name: FORM_FIELDS_NAMES.login, type: 'text', label: 'Логин' },
  { name: FORM_FIELDS_NAMES.first_name, type: 'text', label: 'Имя' },
  { name: FORM_FIELDS_NAMES.second_name, type: 'text', label: 'Фамилия' },
  { name: FORM_FIELDS_NAMES.phone, type: 'text', label: 'Телефон' },
  { name: FORM_FIELDS_NAMES.password, type: 'password', label: 'Пароль' },
  {
    name: FORM_FIELDS_NAMES.passwordCheck,
    type: 'password',
    label: 'Пароль еще раз'
  }
]

export const profileFormFields: Array<FormElementType> = [
  {
    type: 'text',
    name: FORM_FIELDS_NAMES.email,
    value: 'pochta@yandex.ru',
    label: 'Почта'
  },
  {
    type: 'text',
    name: FORM_FIELDS_NAMES.login,
    value: 'ivanivanov',
    label: 'Логин'
  },
  {
    type: 'text',
    name: FORM_FIELDS_NAMES.first_name,
    value: 'Иванов',
    label: 'Фамилия'
  },
  {
    type: 'text',
    name: FORM_FIELDS_NAMES.second_name,
    value: 'Иван',
    label: 'Имя'
  },
  {
    type: 'text',
    name: FORM_FIELDS_NAMES.display_name,
    value: 'Иван',
    label: 'Имя в чате'
  },
  {
    type: 'text',
    name: FORM_FIELDS_NAMES.phone,
    value: '+7(909)-967-30-30',
    label: 'Телефон'
  }
]

export const profileFormEditPswdFields: Array<FormElementType> = [
  {
    type: 'password',
    name: FORM_FIELDS_NAMES.oldPassword,
    value: '12345678',
    label: 'Старый пароль'
  },
  {
    type: 'password',
    name: FORM_FIELDS_NAMES.newPassword,
    value: '123456',
    label: 'Новый пароль'
  },
  {
    type: 'password',
    name: FORM_FIELDS_NAMES.newPasswordControl,
    value: '123456',
    label: 'Повторите новый пароль'
  }
]
