import Handlebars from 'handlebars'
import './chat-preview.css'

export const ChatPreview = `
<div class="chat">
    <img class="chat__avatar" alt="avatar"/>
    
    <div class="chat-content">
        <div class="chat-content-top">
            <h2 class="chat-content__author">Андрей</h2>
            <h3 class="chat-content__time">21:30</h3>
        </div>
        
        <div class="chat-content-bottom">
            <h3 class="chat-content__sender">You:</h3>
            <h3 class="chat-content__message">message</h3>
        </div>
        {{#if amount}}
        <div class="chat-content__amount">2</div>
        {{/if}}
    </div>

</div>
`
Handlebars.registerPartial('chatPreview', ChatPreview)
