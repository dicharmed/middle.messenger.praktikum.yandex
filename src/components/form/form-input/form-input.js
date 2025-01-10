import Handlebars from 'handlebars'
import './form-input.css'

export const formInput = `
<div class="field">
    <div class="input-data">
        <input type="text" required>
            <div class="underline"></div>
            <label>Логин</label>
    </div>
</div>
`
Handlebars.registerPartial('formInput', formInput)
