export function queryStringify(data: unknown) {
  if (typeof data !== 'object') {
    throw new Error('Data must be object')
  }

  // Здесь достаточно и [object Object] для объекта
  if (data instanceof Object) {
    const keys = Object.keys(data)
    return keys.reduce((result, key, index) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`
    }, '?')
  }
}
