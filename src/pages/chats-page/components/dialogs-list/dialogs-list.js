import { DialogPreview } from '../dialog-preview/dialog-preview.js'
import Handlebars from 'handlebars'
import './dialogs-list.css'

const dialogs = [
  {
    id: 1,
    time: '20:30',
    sender: 'You',
    message: 'Hi! How are you?',
    amount: 2
  }
]
export const DialogsList = `
    <div class="dialogs">
        <div class="dialogs__item">{{> dialogPreview }}</div>
        <div class="dialogs__item">{{> dialogPreview }}</div>
        <div class="dialogs__item">{{> dialogPreview }}</div>        

    </div>
`
Handlebars.registerPartial('dialogsList', DialogsList)
