import { Route } from './route.ts'
import Block from '../services/block.ts'

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
    window.onpopstate = ((event: PopStateEvent) => {
      const target = event.currentTarget! as Window
      this._onRoute(target.location.pathname)
    }).bind(this)

    this._onRoute(window.location.pathname)
  }

  _onRoute(pathname: string) {
    let route = this.getRoute(pathname)
    if (!route) {
      route = this.getRoute('*')
    }

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
