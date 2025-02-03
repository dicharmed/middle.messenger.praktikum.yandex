import './link.css'
import Block from '../../services/block.ts'
import { LinkType, PropsType } from '../../types/types.ts'
import { default as LinkTemplate } from './link.hbs?raw'

type Props = PropsType & LinkType
export default class Link extends Block {
  constructor(props: Props) {
    super({
      ...props,
      tagName: 'a'
    })
  }

  render() {
    return this.compile(LinkTemplate, this.props)
  }
}
//form link  attributes: { class: 'link' }
//nav link   attributes: { class: 'js-nav-link' }
