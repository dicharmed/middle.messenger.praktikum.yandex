import Handlebars from 'handlebars'
import './chat-window.css'
import { ChatWindowHeader } from '../../chat-window-header/chat-window-header.js'

export const ChatWindow = `
<div class="chat-window">
    {{> chatWindowHeader}}
    <div>content</div>
    <div>footer</div>
</div>
`
Handlebars.registerPartial('chatWindow', ChatWindow)
