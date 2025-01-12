import Handlebars from 'handlebars'
import './chat-window-content.css'
import { ChatMessage } from '../chat-message/chat-message.js'

const messagesList = [
  {
    sender: 'you',
    type: 'text',
    message: 'Hi!',
    status: 'success',
    time: '12:30'
  },
  {
    sender: 'Mike',
    type: 'text',
    message: "What's up",
    time: '14:15'
  }
]
export const ChatWindowContent = `
<div>{{> chatMessage status='seen'}}</div>
`
Handlebars.registerPartial('chatWindowContent', ChatWindowContent)
