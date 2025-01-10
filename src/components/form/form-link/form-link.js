import Handlebars from 'handlebars'
import './form-link.css'

export const FormLink = `<a class="link" href={{url}}>{{title}}</a>`
Handlebars.registerPartial('formLink', FormLink)
