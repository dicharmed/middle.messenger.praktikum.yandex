import { DialogsList } from '../dialogs-list/dialogs-list.js'
import { SearchField } from '../search-field/search-field.js'
import Handlebars from 'handlebars'
import './sidebar.css'

export const Sidebar = `
<div class="sidebar">
    <a>Профиль ></a>
    <div class="sidebar__search-field">{{> searchField}}</div>
  
    {{> dialogsList}}
</div>
`
Handlebars.registerPartial('sidebar', Sidebar)
