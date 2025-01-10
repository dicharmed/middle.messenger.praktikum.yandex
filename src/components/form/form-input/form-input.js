import Handlebars from 'handlebars'
import './form-input.css'

export const formInput = `
<div class="field">
    <div class="input-data">
        <input name={{name}} type={{type}} required>
            <div class="underline"></div>
            <label>{{title}}</label>
    </div>
</div>
`
Handlebars.registerPartial('formInput', formInput)
