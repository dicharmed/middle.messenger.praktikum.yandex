import './link.css'
import Block from '../../services/block.ts'
import { LinkType, PropsType } from '../../types/types.ts'
import { default as LinkTemplate } from './link.hbs?raw'
import { router } from '../../services/router.ts'

type Props = PropsType & LinkType
export default class Link extends Block {
  constructor(props: Props) {
    super({
      ...props,
      tagName: 'span',
      attributes: { class: ['link', String(props.attributes?.class)] },
      events: {
        click: e => {
          const event = e as MouseEvent
          event.preventDefault()
          if (props.pathName) router.go(props.pathName)
        }
      }
    })
  }

  render() {
    return this.compile(LinkTemplate, this.props)
  }
}
