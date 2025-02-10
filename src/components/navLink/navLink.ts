import Block from '../../services/block.ts'
import { LinkType, PropsType } from '../../types/types.ts'

type Props = PropsType & LinkType
export default class NavLink extends Block {
  constructor(props: Props) {
    super({
      ...props,
      tagName: 'a',
      attributes: { class: 'js-nav-link', href: props.href }
    })
  }

  render() {
    return this.compile('{{title}}', this.props)
  }
}
