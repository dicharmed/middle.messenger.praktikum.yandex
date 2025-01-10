import Handlebars from 'handlebars'
import './style.css'
import { setupCounter } from './counter.js'
import { login } from './pages/home-page/modules/login.js'
import { errorPage } from './pages/error-page/error-page.js'
// const test = `
// <div>
//         <h1>{{title}}</h1>
//         <div class="card">
//             <form-button id="counter" type="form-button"></form-button>
//         </div>
// </div>`

const template = Handlebars.compile(login)
const filled = template({ title: 'Hello!' })

document.querySelector('#app').innerHTML = filled

// setupCounter(document.querySelector('#counter'))
