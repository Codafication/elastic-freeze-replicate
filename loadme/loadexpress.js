import http from 'k6/http'


const URI = 'http://localhost:8081'

const client = {
  get: () => {
    return http.get(URI)
  }
}

export default function () {
  client.get()
}
