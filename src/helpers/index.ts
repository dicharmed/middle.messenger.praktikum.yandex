import { compare } from './compare.ts'
import Handlebars from 'handlebars'
import { HELPERS } from '../constants/enums.ts'

Handlebars.registerHelper(HELPERS.compare, compare)
