import Handlebars from 'handlebars'
import './chat-window-content.css'
import { ChatMessage } from '../chat-message/chat-message.js'

const messagesList = [
  {
    sender: 'you',
    type: 'text',
    message: 'Hi!',
    status: 'seen',
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
<div>{{> chatMessage message="Hi! How's it going?" time="12:30"}}</div>
`
Handlebars.registerPartial('chatWindowContent', ChatWindowContent)
