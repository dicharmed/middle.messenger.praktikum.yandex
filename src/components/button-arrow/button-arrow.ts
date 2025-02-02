import './button-arrow.css'
import Block from '../../services/block.ts'
import { PropsType } from '../../types/types.ts'
import { default as ButtonArrowTemplate } from './button-arrow.hbs?raw'
import Handlebars from 'handlebars'

interface Props extends PropsType {
  direction?: 'left' | 'right'
}
export default class ButtonArrow extends Block {
  constructor(props: Props) {
    super({
      ...props,
      tagName: 'button',
      attributes: { class: 'button-arrow' }
    })
  }

  render() {
    return this.compile(ButtonArrowTemplate, this.props)
  }
}

Handlebars.registerHelper(
  'isLeft',
  function (this: unknown, direction, options) {
    if (direction === 'left') {
      return options.fn(this)
    } else {
      return options.inverse(this)
    }
  }
)
