import './style.css'
import * as components from './components'
import { registerTemplate } from './utils/register-template.ts'
import { registerRouter } from './utils/register-router.ts'
import { routes } from './config/routes.ts'

registerTemplate(components)

registerRouter(routes)
