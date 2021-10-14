import algoliasearch from 'algoliasearch'

class AlgoliaService {
  constructor() {
    this._client = algoliasearch(
      process.env.ALGOLIA_APPLICATION_ID || process.env.algolia?.applicationId,
      process.env.ALGOLIA_API_KEY || process.env.algolia?.apiKey
    )
  }

  setIndex(index) {
    this._index = this._client.initIndex(index)
  }

  async get() {
    const response = await this._index.search()

    return response
  }

  async getByTerm(term) {
    const response = await this._index.search(term)

    return response
  }
}

export default new AlgoliaService
