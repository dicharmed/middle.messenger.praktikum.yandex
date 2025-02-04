import './error-page.css'
import { default as ErrorPageTemplate } from './error-page.hbs?raw'
import Block from '../../services/block.ts'
import { ErrorType, PropsType } from '../../types/types.ts'

type Props = PropsType & ErrorType
class ErrorPageClass extends Block {
  constructor(props: Props) {
    super(props)
  }

  render() {
    return this.compile(ErrorPageTemplate, this.props)
  }
}

export const ErrorPage = new ErrorPageClass({
  message: `Internal Server`,
  status: '500',
  userMessage: 'Мы уже фиксим',
  attributes: { class: 'error-page' }
})
