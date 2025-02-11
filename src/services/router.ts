import Block from './block.ts'
import { Route } from './route.ts'
import { ROUTES } from '../constants/enums.ts'

export class Router {
  routes: Array<Route> = []
  history: History = window.history
  private _currentRoute: Route | null = null
  private _rootQuery!: string
  private static __instance: Router

  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance
    }

    this._rootQuery = rootQuery

    Router.__instance = this
  }

  use(pathname: string, block: Block) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery })

    this.routes.push(route)
    return this
  }

  start() {
    window.onpopstate = (event: PopStateEvent) => {
      event.preventDefault()
      this._onRoute((event.currentTarget as Window)?.location.pathname)
    }

    this._onRoute(window.location.pathname)
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname) || this.getRoute(ROUTES.NOT_FOUND)

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave()
    }

    this._currentRoute = route as Route
    route!.render()
  }

  go(pathname: string) {
    this.history.pushState({}, '', pathname)
    this._onRoute(pathname)
  }

  back() {
    this.history.back()
  }

  forward() {
    this.history.forward()
  }

  getRoute(pathname: string) {
    return this.routes.find(route => route.match(pathname))
  }
}

export const router = new Router('app')
