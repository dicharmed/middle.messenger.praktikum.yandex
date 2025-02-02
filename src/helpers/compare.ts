import Handlebars from 'handlebars'

export const compare = function (
  this: unknown,
  lvalue: unknown,
  operator: string,
  rvalue: unknown,
  options?: Handlebars.HelperOptions
) {
  if (arguments.length < 3) {
    throw new Error("Handlebars Helper 'compare' needs 2 parameters")
  }

  // Если options не передан, значит мы используем шорткат для оператора
  if (typeof options === 'undefined') {
    options = rvalue as Handlebars.HelperOptions
    rvalue = operator
    operator = '==='
  }

  const operators: Record<string, (l: unknown, r: unknown) => boolean> = {
    '==': (l, r) => l == r,
    '===': (l, r) => l === r,
    '!=': (l, r) => l != r,
    '!==': (l, r) => l !== r,
    '<': (l, r) => Number(l) < Number(r),
    '>': (l, r) => Number(l) > Number(r),
    '<=': (l, r) => Number(l) <= Number(r),
    '>=': (l, r) => Number(l) >= Number(r),
    typeof: (l, r) => typeof l === r
  }

  if (!operators[operator]) {
    throw new Error(
      `Handlebars Helper 'compare' doesn't recognize the operator "${operator}"`
    )
  }

  const result = operators[operator](lvalue, rvalue)

  return result ? options.fn(this) : options.inverse(this)
}
