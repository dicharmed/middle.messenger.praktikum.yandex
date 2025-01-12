import Handlebars from 'handlebars'
import './button-icon.css'

export const ButtonIcon = `
<button class="button-icon" type="button">
    <img src={{url}} alt="menu icon">
</button>
`
Handlebars.registerPartial('buttonIcon', ButtonIcon)
