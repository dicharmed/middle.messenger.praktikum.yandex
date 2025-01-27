import Handlebars from 'handlebars'

export function render(component: string): void {
  const root = document.getElementById('app')
  const renderFn = Handlebars.compile(component)

  if (root) {
    root.innerHTML = renderFn({})
  }
}
