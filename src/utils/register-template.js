import Handlebars from 'handlebars'

export function registerTemplate(templates) {
  Object.entries(templates).forEach(([name, template]) =>
    Handlebars.registerPartial(name, template)
  )
}
