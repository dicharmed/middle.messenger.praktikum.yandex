import { FormDataType, FormErrorType } from '../types/types.ts'
import { FORM_FIELDS_NAMES } from '../constants/enums.ts'

export function validateForm(formData: FormDataType) {
  const errors: FormErrorType = {}

  // Проверка first_name и second_name
  if (FORM_FIELDS_NAMES.first_name in formData) {
    const nameRegex = /^[A-ZА-Я][a-zа-я-]*$/
    if (!nameRegex.test(formData.first_name)) {
      errors.first_name =
        'Имя должно начинаться с заглавной буквы, содержать только латиницу или кириллицу, без пробелов, цифр и спецсимволов (кроме дефиса)'
    }
  }
  //Проверка second_name
  if (FORM_FIELDS_NAMES.second_name in formData) {
    const nameRegex = /^[A-ZА-Я][a-zа-я-]*$/
    if (!nameRegex.test(formData.second_name)) {
      errors.second_name =
        'Фамилия должна начинаться с заглавной буквы, содержать только латиницу или кириллицу, без пробелов, цифр и спецсимволов (кроме дефиса)'
    }
  }

  // Проверка login
  if (FORM_FIELDS_NAMES.login in formData) {
    const loginRegex = /^(?!\d+$)[a-zA-Z0-9-_]{3,20}$/
    if (!loginRegex.test(formData.login)) {
      errors.login =
        'Логин должен быть от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, допускаются дефис и нижнее подчёркивание'
    }
  }

  // Проверка email
  if (FORM_FIELDS_NAMES.email in formData) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(formData.email)) {
      errors.email = 'Некорректный email'
    }
  }

  // Проверка password
  if (FORM_FIELDS_NAMES.password in formData) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,40}$/
    if (!passwordRegex.test(formData.password)) {
      errors.password =
        'Пароль должен содержать от 8 до 40 символов, хотя бы одну заглавную букву и цифру'
    }
  }

  // Проверка phone
  if (FORM_FIELDS_NAMES.phone in formData) {
    const phoneRegex = /^\+?\d{10,15}$/
    if (!phoneRegex.test(formData.phone)) {
      errors.phone =
        'Телефон должен содержать от 10 до 15 цифр и может начинаться с плюса'
    }
  }

  // Проверка message
  if (FORM_FIELDS_NAMES.message in formData) {
    if (!formData.message || formData.message.trim() === '') {
      errors.message = 'Сообщение не должно быть пустым'
    }
  }

  return Object.keys(errors).length === 0 ? undefined : errors
}
