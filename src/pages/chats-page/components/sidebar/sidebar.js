import { ChatsList } from '../chats-list/chats-list.js'
import { SearchField } from '../search-field/search-field.js'
import Handlebars from 'handlebars'
import './sidebar.css'

export const Sidebar = `
<div class="sidebar">
    <a class="sidebar__link">Профиль</a>
    <div class="sidebar__search-field">{{> searchField}}</div>
    {{> chatsList}}
</div>
`
Handlebars.registerPartial('sidebar', Sidebar)
