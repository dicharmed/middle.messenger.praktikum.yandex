import './sidebar.css'
import { default as SidebarTemplate } from './sidebar.hbs?raw'
import Block from '../../../../services/block.ts'
import { ChatPreviewType, PropsType } from '../../../../types/types.ts'
import SearchField from '../search-field/search-field.ts'
import ChatsList from '../chats-list/chats-list.ts'
import Link from '../../../../components/link/link.ts'
import { ROUTES } from '../../../../constants/enums.ts'

const chats: Array<ChatPreviewType> = [
  {
    message: {
      text: 'hello',
      time: '12:30',
      type: 'outcoming',
      sender: {
        firstName: 'Mike',
        lastName: 'Portman'
      }
    },
    amount: 2
  },
  {
    message: {
      text: 'Hey! I was just thinking about our last conversation—it’s crazy how time flies. Remember when we used to stay up all night talking about the most random things? I miss that. Life’s been busy, but I hope you’re doing great. Let’s catch up soon! By the way, I found this cool little café that I think you’d love. It has the coziest vibe, and they make the best coffee I’ve had in ages. Maybe we can go there together sometime? Let me know when you’re free! Miss our talks. Take care!',
      time: '22:30',
      type: 'incoming',
      sender: {
        firstName: 'Linda',
        lastName: ''
      }
    }
  }
]

export default class Sidebar extends Block {
  constructor(props: PropsType) {
    super({
      ...props,
      attributes: { class: 'sidebar' }
    })

    if (!this.children.link) {
      this.children.link = new Link({
        title: 'Профиль',
        pathName: ROUTES.PROFILE,
        attributes: { class: 'sidebar__link' }
      })
    }

    if (!this.children.searchField) {
      this.children.searchField = new SearchField({})
    }
    if (!this.children.chatsList) {
      this.children.chatsList = new ChatsList({ chats })
    }
  }

  render() {
    return this.compile(SidebarTemplate, this.props)
  }
}
