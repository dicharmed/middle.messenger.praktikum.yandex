import Handlebars from 'handlebars'

export function compile(template: Handlebars.Template, props: unknown) {
  const compiledTemplate = Handlebars.compile(template)
  return compiledTemplate(props)
}
