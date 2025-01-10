import Handlebars from 'handlebars'
import './form-button.css'

export const FormButton = `<input class="button" type="submit" value={{title}}>`
Handlebars.registerPartial('formButton', FormButton)
