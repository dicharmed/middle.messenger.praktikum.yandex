import Handlebars from 'handlebars'
import './button-arrow.css'

export const ButtonArrow = `
<button class="button-arrow">
     {{#if left}}
     <img class="button-arrow__img" src="/assets/arrow-left.svg"/>
     {{else}}
     <img class="button-arrow__img" src="/assets/arrow-right.svg"/>
     {{/if}}
</button>
`
Handlebars.registerPartial('buttonArrow', ButtonArrow)
