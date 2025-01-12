import './chat-window-header.css'
import { ButtonIcon } from '../../../../components/button-icon/button-icon.js'
import Handlebars from 'handlebars'

export const ChatWindowHeader = `
<div class="chat-header">
    <div class="chat-header-contact">
        <img class="chat-header__avatar" alt="avatar" src={{url}}/>
        <h2 class="chat-header__name">Вадим</h2>  
    </div>
    
    <div class="chat-header__menu">{{> buttonIcon url="/assets/menu-icon.svg"}}</div>
    
</div>
`
Handlebars.registerPartial('chatWindowHeader', ChatWindowHeader)
