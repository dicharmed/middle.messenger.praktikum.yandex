import { registerTemplate } from '../../utils/register-template.ts'
import Handlebars from 'handlebars'
import { HELPERS } from '../../constants/enums.ts'
import { compare } from '../../helpers/compare.ts'
import { components } from '../../components'
export { default as HomePage } from './home-page.ts'

registerTemplate(components)
Handlebars.registerHelper(HELPERS.compare, compare)
