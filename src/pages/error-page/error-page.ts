import './error-page.css'
import { default as ErrorPageTemplate } from './error-page.hbs?raw'
import Block from '../../services/block.ts'
import { ErrorType, PropsType } from '../../types/types.ts'
import Link from '../../components/link/link.ts'
import { ROUTES } from '../../constants/enums.ts'

type Props = PropsType & ErrorType
class ErrorPageClass extends Block {
  constructor(props: Props) {
    super(props)

    if (!this.children.link) {
      this.children.link = new Link({
        title: 'Назад к чатам',
        pathName: ROUTES.CHATS,
        attributes: { class: 'error-page__link' }
      })
    }
  }

  render() {
    return this.compile(ErrorPageTemplate, this.props)
  }
}

export const ErrorPage500 = new ErrorPageClass({
  message: `Internal Server`,
  status: '500',
  userMessage: 'Мы уже фиксим',
  attributes: { class: 'error-page' }
})
export const ErrorPage404 = new ErrorPageClass({
  message: `Not Found`,
  status: '404',
  userMessage: 'Страница не найдена',
  attributes: { class: 'error-page' }
})
