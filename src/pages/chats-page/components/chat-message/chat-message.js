import Handlebars from 'handlebars'
import './chat-message.css'

export const ChatMessage = `
<div class="chat-message chat-message_outcoming">
    <div class="chat-message__text">Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.

                                     Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.</div>
    <div class="chat-message-info">
        {{#if status}}
        <img class="chat-message__status" src="/assets/msg-status-seen.svg" alt="status"/>
        {{/if}}
        <div class="chat-message__time chat-message__time_outcoming">12:30</div>
    </div>
</div>
`
Handlebars.registerPartial('chatMessage', ChatMessage)
