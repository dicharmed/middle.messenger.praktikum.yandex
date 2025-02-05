import { FormElementType, LinkType } from '../types/types.ts'
import { NAV_LINKS } from './enums.ts'

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
  { type: 'text', name: 'email', value: 'pochta@yandex.ru', label: 'Почта' },
  { type: 'text', name: 'login', value: 'ivanivanov', label: 'Логин' },
  { type: 'text', name: 'first_name', value: 'Иванов', label: 'Фамилия' },
  { type: 'text', name: 'second_name', value: 'Иван', label: 'Имя' },
  { type: 'text', name: 'display_name', value: 'Иван', label: 'Имя в чате' },
  { type: 'text', name: 'phone', value: '+7(909)-967-30-30', label: 'Телефон' }
]

export const signUpFormFields: Array<FormElementType> = [
  { name: 'email', type: 'text', label: 'Почта' },
  { name: 'login', type: 'text', label: 'Логин' },
  { name: 'first_name', type: 'text', label: 'Имя' },
  { name: 'second_name', type: 'text', label: 'Фамилия' },
  { name: 'phone', type: 'text', label: 'Телефон' },
  { name: 'password', type: 'password', label: 'Пароль' },
  { name: 'password', type: 'password', label: 'Пароль еще раз' }
]

export const profileFormEditFields: Array<FormElementType> = [
  {
    type: 'password',
    name: 'oldPassword',
    value: '12345678',
    label: 'Старый пароль'
  },
  {
    type: 'password',
    name: 'newPassword',
    value: '123456',
    label: 'Новый пароль'
  },
  {
    type: 'password',
    name: 'newPasswordControl',
    value: '123456',
    label: 'Повторите новый пароль'
  }
]
