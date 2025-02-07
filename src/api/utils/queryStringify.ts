export function queryStringify(data: unknown) {
  if (typeof data !== 'object') {
    throw new Error('Data must be object')
  }

  if (data instanceof Object) {
    const keys = Object.keys(data)
    return keys.reduce((result, key, index) => {
      return `${result}${key}=${(data as Record<string, unknown>)[key]}${index < keys.length - 1 ? '&' : ''}`
    }, '?')
  }
}
