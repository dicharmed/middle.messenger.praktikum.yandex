import './link.css'
import Block from '../../services/block.ts'
import { PropsType } from '../../types/types.ts'

interface Props extends PropsType {
  href: string
  title: string
  className: string
}
export default class Link extends Block {
  constructor(props: Props) {
    super({
      ...props,
      tagName: 'a',
      attributes: { class: 'link' }
    })
  }

  render() {
    return this.compile('', this.props)
  }
}
//form link  attributes: { class: 'link' }
//nav link   attributes: { class: 'js-nav-link' }
