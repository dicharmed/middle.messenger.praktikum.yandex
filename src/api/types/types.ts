import { METHODS } from '../constants/enums.ts'

export type Options = {
  method: METHODS
  data?: unknown
  headers?: Record<string, string>
  timeout?: number
}
export type HTTPMethod = (
  url: string,
  options: OptionsWithoutMethod
) => Promise<XMLHttpRequest>

export type HTTPRequest = (
  url: string,
  options: Options
) => Promise<XMLHttpRequest>

export type OptionsWithoutMethod = Omit<Options, 'method'>
