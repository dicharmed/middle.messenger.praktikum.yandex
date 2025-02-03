import './chat-window-header.css'
import Block from '../../../../../../services/block.ts'
import { MessageType, PropsType } from '../../../../../../types/types.ts'
import { default as ChatWindowHeaderTemplate } from './chat-window-header.hbs?raw'
import Avatar from '../../../../../../components/avatar/avatar.ts'
import { SIZE } from '../../../../../../constants/enums.ts'
import ButtonIcon from '../../../../../../components/button-icon/button-icon.ts'
import DropdownMenu from '../../../../../../components/dropdown-menu/dropdown-menu.ts'

type Props = PropsType & Pick<MessageType, 'sender'>
export default class ChatWindowHeader extends Block {
  constructor(props: Props) {
    super({
      ...props,
      attributes: { class: 'chat-header' }
    })
    const handleAddUser = () => {}
    const handleRemoveUser = () => {}

    if (!this.children.avatar) {
      this.children.avatar = new Avatar({ size: SIZE.small })
    }
    if (!this.children.buttonIcon) {
      this.children.buttonIcon = new ButtonIcon({
        url: '/assets/menu-icon.svg'
      })
    }
    if (!this.children.dropdownMenu) {
      this.children.dropdownMenu = new DropdownMenu({
        addUser: handleAddUser,
        removeUser: handleRemoveUser
      })
    }
  }

  render() {
    return this.compile(ChatWindowHeaderTemplate, this.props)
  }
}
