import { Route } from '../types/route.ts'
import { render } from './render.ts'

export function registerRouter(config: Route[]): void {
  function goTo(path = '/') {
    const page = config.find(page => page.path === path)

    if (page) {
      window.history.pushState(null, '', page.path)
      render(page.component)
    } else {
      const errorPage = config.find(page => page.path === '*')

      if (errorPage) {
        render(errorPage.component)
      } else {
        alert('Упс! Мы сломались:(')
      }
    }
  }

  function handleNavigate(e: MouseEvent) {
    if (
      e.target &&
      e.target instanceof HTMLElement &&
      e.target.classList.contains('js-nav-link')
    ) {
      e.preventDefault()

      const path = e.target.getAttribute('href')
      goTo(String(path))
    }
  }

  function handlePopState(e: PopStateEvent) {
    e.preventDefault()
    goTo(window.location.pathname)
  }

  document.addEventListener('click', handleNavigate)
  window.addEventListener('popstate', handlePopState)

  goTo(window.location.pathname)
}
