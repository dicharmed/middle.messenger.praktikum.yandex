import './style.css'
// import * as components from './components'
// import { registerTemplate } from './utils/register-template.ts'
import { renderBlock } from './utils/renderBlock.ts'
import { TestPage } from './pages/test-page/test-page.ts'
import { registerHelpers } from './helpers'
// import { registerRouter } from './utils/register-router.ts'
// import { routes } from './config/routes.ts'

// registerTemplate(components)

console.log('registerHelpers')
renderBlock(TestPage)
registerHelpers()
// registerRouter(routes)
