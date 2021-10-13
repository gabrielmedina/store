import algoliaService from '@/services/algoliaService'

const searchMethodMock = jest.fn().mockImplementation(() => {
  return Promise.resolve({
    hits: []
  })
})

const _indexMock = jest.fn(() => ({
  search: searchMethodMock,
}))

algoliaService._client = {
  initIndex: _indexMock,
}

describe('Services > AlgoliaService', () => {
  beforeAll(() => {
    algoliaService.setIndex('index_name')
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('when get() is called', () => {
    algoliaService.get()

    expect(searchMethodMock).toBeCalled()
    expect(searchMethodMock).toBeCalledTimes(1)
  })

  it('when getByTerm() is called', () => {
    const term = 'term'

    algoliaService.getByTerm(term)

    expect(searchMethodMock).toBeCalled()
    expect(searchMethodMock).toBeCalledTimes(1)
    expect(searchMethodMock).toBeCalledWith(term)
  })
})
