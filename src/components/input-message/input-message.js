import Handlebars from 'handlebars'
import './input-message.css'

export const InputMessage = `<input class="input-message" type="text" name={{name}} placeholder={{placeholder}}>`
Handlebars.registerPartial('inputMessage', InputMessage)
