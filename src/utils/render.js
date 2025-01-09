import Handlebars from 'handlebars'

export function render(component) {
  const root = document.getElementById('app')
  const renderFn = Handlebars.compile(component)
  root.innerHTML = renderFn({})
}
