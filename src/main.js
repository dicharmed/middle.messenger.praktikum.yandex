import Handlebars from 'handlebars';
import './style.css'
import { setupCounter } from './counter.js'

const test = `
<div>
        <h1>{{title}}</h1>
        <div class="card">
            <button id="counter" type="button"></button>
        </div>
</div>`


const template = Handlebars.compile(test)
const filled = template({title: "Hello!"})

document.querySelector('#app').innerHTML = filled

setupCounter(document.querySelector('#counter'))
