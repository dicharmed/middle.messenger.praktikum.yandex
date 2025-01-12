import './chat-window-header.css'
import { ButtonIcon } from '../../../../components/button-icon/button-icon.js'
import { DropDownMenu } from '../../../../components/drop-down-menu/drop-down-menu.js'
import Handlebars from 'handlebars'

const handleClick = () => {
  console.log('clicked')
}
export const ChatWindowHeader = `
<div class="chat-header">
    <div class="chat-header-contact">
        <img class="chat-header__avatar" alt="avatar" src={{url}}/>
        <h2 class="chat-header__name">Вадим</h2>  
    </div>
    
    <div class="chat-header__menu">{{> buttonIcon url="/assets/menu-icon.svg"}}</div>
    
    <div class="chat-header__drop-down-menu">
        {{> dropDownMenu}}
    </div>
    
</div>
`
Handlebars.registerPartial('chatWindowHeader', ChatWindowHeader)

// document.getElementById('demo').onclick = function () {
//   handleClick()
// }
