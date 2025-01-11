import { DialogsList } from '../dialogs-list/dialogs-list.js'
import Handlebars from 'handlebars'
import './chat-left-side.css'

export const ChatLeftSide = `
<div class="left-side">
    <a>Профиль ></a>
    <div>search</div>
    {{> dialogsList}}
</div>
`
Handlebars.registerPartial('chatLeftSide', ChatLeftSide)
