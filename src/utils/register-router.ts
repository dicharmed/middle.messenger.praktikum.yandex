import { render } from './render'
import { Route } from '../types/route.ts'

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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if (e.target && e.target.classList.contains('js-nav-link')) {
      e.preventDefault()

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const path = e.target.getAttribute('href')
      goTo(path)
    }
  }

  function handlePopState(e: PopStateEvent) {
    e.preventDefault()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    goTo(e.target.location.pathname)
  }

  document.addEventListener('click', handleNavigate)
  window.addEventListener('popstate', handlePopState)

  goTo(window.location.pathname)
}
