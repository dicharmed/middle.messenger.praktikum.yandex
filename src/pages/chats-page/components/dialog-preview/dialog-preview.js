import Handlebars from 'handlebars'
import './dialog-preview.css'

export const DialogPreview = `
<div class="dialog">
    <img class="dialog__avatar" alt="avatar"/>
    
    <div class="dialog-content">
        <div class="dialog-content-top">
            <h2 class="dialog-content__author">Андрей</h2>
            <h3 class="dialog-content__time">21:30</h3>
        </div>
        
        <div class="dialog-content-bottom">
            <h3 class="dialog-content__sender">You:</h3>
            <h3 class="dialog-content__message">message</h3>
        </div>
        {{#if amount}}
        <div class="dialog-content__amount">2</div>
        {{/if}}
    </div>

</div>
`
Handlebars.registerPartial('dialogPreview', DialogPreview)
