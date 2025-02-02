import { compare } from './compare.ts'
import Handlebars from 'handlebars'
import { HELPERS } from './constants.ts'

export const registerHelpers = () => {
  Handlebars.registerHelper(HELPERS.compare, compare)
  console.log('registerHelpers')
}
