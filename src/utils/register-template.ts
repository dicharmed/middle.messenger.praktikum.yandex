import Handlebars from 'handlebars'

export function registerTemplate(
  templates: Record<string, Handlebars.Template>
) {
  Object.entries(templates).forEach(([name, template]) =>
    Handlebars.registerPartial(name, template)
  )
}
