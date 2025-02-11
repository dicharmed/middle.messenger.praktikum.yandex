import './style.css'
import { routes } from './routing/routes.ts'
import { router } from './services/router.ts'

routes.map(route => {
  router.use(route.path, route.component)
})
router.start()
