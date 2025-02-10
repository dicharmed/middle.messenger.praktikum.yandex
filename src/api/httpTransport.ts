import { METHODS } from './constants/enums.ts'
import { queryStringify } from './utils/queryStringify.ts'
import { HTTPMethod, HTTPRequest } from './types/types.ts'

export default class HttpTransport {
  get: HTTPMethod = (url, options = {}) => {
    return this.request(url, { ...options, method: METHODS.GET })
  }

  post: HTTPMethod = (url, options = {}) => {
    return this.request(url, { ...options, method: METHODS.POST })
  }

  put: HTTPMethod = (url, options = {}) => {
    return this.request(url, { ...options, method: METHODS.PUT })
  }

  delete: HTTPMethod = (url, options = {}) => {
    return this.request(url, { ...options, method: METHODS.DELETE })
  }

  request: HTTPRequest = (url, options) => {
    const { headers = {}, method, data, timeout = 5000 } = options

    return new Promise(function (resolve, reject) {
      if (!method) {
        reject('No method')
        return
      }

      const xhr = new XMLHttpRequest()
      const isGet = method === METHODS.GET

      xhr.open(method, isGet && !!data ? `${url}${queryStringify(data)}` : url)

      Object.keys(headers).forEach(key => {
        xhr.setRequestHeader(key, headers[key])
      })

      xhr.onload = function () {
        resolve(xhr)
      }

      xhr.onabort = reject
      xhr.onerror = reject

      xhr.timeout = timeout
      xhr.ontimeout = reject

      if (isGet || !data) {
        xhr.send()
      } else {
        xhr.send(
          JSON.stringify(
            data as Document | XMLHttpRequestBodyInit | null | undefined
          )
        )
      }
    })
  }
}
