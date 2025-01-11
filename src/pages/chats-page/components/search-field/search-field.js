import Handlebars from 'handlebars'
import './search-field.css'

export const SearchField = `
<form class="search">
    <input class="search__input" type="search" name="search" placeholder="Поиск"/>
</form>
`
Handlebars.registerPartial('searchField', SearchField)
