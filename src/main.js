import Handlebars from 'handlebars'
import { homePage } from './pages/home-page/home-page.js'
import './style.css'

const template = Handlebars.compile(homePage)
const filled = template({})

document.querySelector('#app').innerHTML = filled
