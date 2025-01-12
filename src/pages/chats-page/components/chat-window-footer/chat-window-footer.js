import Handlebars from 'handlebars'
import './chat-window-footer.css'
import { InputMessage } from '../../../../components/input-message/input-message.js'
import { ButtonArrow } from '../../../../components/button-arrow/button-arrow.js'

export const ChatWindowFooter = `
<div class="chat-window-footer">
    <img src="/assets/file-attach-icon.svg" alt="file attach icon"/>
    {{> inputMessage name="message" placeholder="Сообщение"}}
    {{> buttonArrow right = true}}
</div>
`
Handlebars.registerPartial('chatWindowFooter', ChatWindowFooter)
