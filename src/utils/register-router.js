import { render } from './render'

export function registerRouter(config) {
  function goTo(path = '/') {
    const page = config.find(page => page.path === path)

    if (page) {
      window.history.pushState(null, null, page.path)
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

  function handleNavigate(e) {
    if (e.target.classList.contains('js-nav-link')) {
      e.preventDefault()

      const path = e.target.getAttribute('href')
      goTo(path)
    }
  }

  function handlePopState(e) {
    e.preventDefault()
    goTo(e.target.location.pathname)
  }

  document.addEventListener('click', handleNavigate)
  window.addEventListener('popstate', handlePopState)

  goTo(window.location.pathname)
}
