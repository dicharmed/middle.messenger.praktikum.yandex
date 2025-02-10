import './avatar.css'
import { default as AvatarTemplate } from './avatar.hbs?raw'
import Block from '../../services/block.ts'
import { ClassNamesType, PropsType } from '../../types/types.ts'
import { SIZE } from '../../constants/enums.ts'
import { getClassNamesFromSize } from './utils/getClassNamesFromSize.ts'

type Props = PropsType & {
  url?: string
  size?: SIZE.medium | SIZE.small
}

export default class Avatar extends Block {
  constructor(props: Props) {
    const classNames: ClassNamesType = getClassNamesFromSize(props.size)
    super({
      ...props,
      attributes: {
        class: classNames
      }
    })
  }

  render() {
    return this.compile(AvatarTemplate, this.props)
  }
}

// Handlebars.registerHelper(HELPERS.compare, compare)
