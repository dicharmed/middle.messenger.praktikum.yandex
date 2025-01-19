import { ChatWindowHeader } from './components/chat-window-header/chat-window-header.js'
import { ChatWindowContent } from './components/chat-window-content/chat-window-content.js'
import { ChatWindowFooter } from './components/chat-window-footer/chat-window-footer.js'
import './chat-window.css'
import { registerTemplate } from '../../../../utils/register-template.js'

registerTemplate({ ChatWindowHeader, ChatWindowContent, ChatWindowFooter })

export { default as ChatWindow } from './chat-window.hbs?raw'
