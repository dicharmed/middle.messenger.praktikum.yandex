import Handlebars from 'handlebars'
import './drop-down-menu.css'

export const DropDownMenu = `
<div class="drop-down-menu">
    <button class="drop-down-menu-item">
        <img class="drop-down-menu-item__icon" alt="icon" src="/assets/circle-plus-icon.svg"/>
        <h2 class="drop-down-menu-item__text">Добавить пользователя</h2>
    </button>    
    <button class="drop-down-menu-item">
        <img class="drop-down-menu-item__icon" alt="icon" src="/assets/circle-minus-icon.svg"/>
        <h2 class="drop-down-menu-item__text">Удалить пользователя</h2>
    </button>
</div>
`
Handlebars.registerPartial('dropDownMenu', DropDownMenu)
