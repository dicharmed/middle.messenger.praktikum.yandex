import { ChatWindowHeader } from './components/chat-window-header/chat-window-header.ts'
import { ChatWindowContent } from './components/chat-window-content/chat-window-content.ts'
import { ChatWindowFooter } from './components/chat-window-footer/chat-window-footer.ts'
import './chat-window.css'
import { registerTemplate } from '../../../../utils/register-template.ts'

registerTemplate({ ChatWindowHeader, ChatWindowContent, ChatWindowFooter })

export { default as ChatWindow } from './chat-window.hbs?raw'
