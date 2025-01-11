import { ChatPreview } from '../chat-preview/chat-preview.js'
import Handlebars from 'handlebars'
import './chats-list.css'

const chats = [
  {
    id: 1,
    time: '20:30',
    sender: 'You',
    message: 'Hi! How are you?',
    amount: 2
  }
]
export const ChatsList = `
    <div class="chats">
        <div class="chats__item">{{> chatPreview }}</div>
        <div class="chats__item">{{> chatPreview }}</div>
        <div class="chats__item">{{> chatPreview }}</div>        

    </div>
`
Handlebars.registerPartial('chatsList', ChatsList)
