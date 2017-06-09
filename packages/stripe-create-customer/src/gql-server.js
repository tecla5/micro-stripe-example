import request from 'request'

const token = process.env.TOKEN
const endpoint = process.env.ENDPOINT

const graphCoolToken = process.env.GC_PAT
const gqlAuthToken = `Bearer ${graphCoolToken}`

export const graphQlServer = new GraphQLServer({
  endpoint,
  token: gqlAuthToken
})

export class GraphQLServer {
  constructor(opts = {}) {
    let {
      endpoint,
      token
    } = opts
    this.endpoint = endpoint
    this.token = token
  }

  query(query) {
    let req = this.gqlQuery(query)
    return request.post(res)
  }

  mutate(mutation) {
    let req = this.gqlQuery(mutation)
    return request.post(req)
  }

  gqlQuery(query) {
    return {
      url: this.endpoint,
      headers: {
        'Authorization': this.token,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        query
      })
    }
  }
}
