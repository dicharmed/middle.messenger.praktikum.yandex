import Handlebars from 'handlebars'
import './chat-message.css'

export const ChatMessage = `
<div class="chat-message chat-message_outcoming">
    <div class="chat-message__text">{{message}}</div>
    <div class="chat-message-info">
        {{#if status}}
        <img class="chat-message__status" src="/assets/msg-status-seen.svg" alt="status"/>
        {{/if}}
        <div class="chat-message__time chat-message__time_outcoming">{{time}}</div>
    </div>
</div>
`
Handlebars.registerPartial('chatMessage', ChatMessage)
