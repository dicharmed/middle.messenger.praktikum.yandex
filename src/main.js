import Handlebars from 'handlebars'
import './style.css'
import { setupCounter } from './counter.js'
import { loginPage } from './pages/login-page/login-page.js'
import { signUpPage } from './pages/sign-up-page/sign-up-page.js'
import { errorPage } from './pages/error-page/error-page.js'
// const test = `
// <div>
//         <h1>{{title}}</h1>
//         <div class="card">
//             <form-button id="counter" type="form-button"></form-button>
//         </div>
// </div>`

const template = Handlebars.compile(signUpPage)
const filled = template({ title: 'Hello!' })

document.querySelector('#app').innerHTML = filled

// setupCounter(document.querySelector('#counter'))
