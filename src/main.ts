import './style.css'
import { routes } from './routing/routes.ts'
import { router } from './routing/router.ts'

routes.forEach(route => {
  router.use(route.path, route.component)
})

router.start()
