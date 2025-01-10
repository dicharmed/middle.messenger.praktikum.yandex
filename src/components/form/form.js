import Handlebars from 'handlebars'
import './form.css'

export const FormElement = `
<form class="form">
    <h1 class="form__title">{{title}}</h1>
    <div class="form-content">
        {{#if user}}
            {{> loginContent}}
        {{else}}
            {{> signUpContent}}
        {{/if}}
    </div>
    <div class="form-actions">
        {{#if true}}
            {{> loginActions}}
        {{else}}
            {{> signUpActions}}
        {{/if}}
    </div>
</form>
`
Handlebars.registerPartial('formElement', FormElement)
