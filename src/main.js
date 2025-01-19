import './style.css'
import * as components from './components'
import { registerTemplate } from './utils/register-template.js'
import { registerRouter } from './utils/register-router.js'
import { routes } from './config/routes.js'

registerTemplate(components)

registerRouter(routes)
