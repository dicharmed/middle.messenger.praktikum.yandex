import './sidebar.css'
import { default as SidebarTemplate } from './sidebar.hbs?raw'
import Block from '../../../../services/block.ts'
import { PropsType } from '../../../../types/types.ts'
import SearchField from '../search-field/search-field.ts'
import ChatsList from '../chats-list/chats-list.ts'

export default class Sidebar extends Block {
  constructor(props: PropsType) {
    super({
      ...props,
      attributes: { class: 'sidebar' }
    })

    if (!this.children.searchField) {
      this.children.searchField = new SearchField({})
    }
    if (!this.children.chatsList) {
      this.children.chatsList = new ChatsList({ chats: undefined })
    }
  }

  render() {
    return this.compile(SidebarTemplate, this.props)
  }
}
