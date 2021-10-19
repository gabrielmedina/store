import searchState from '@/states/searchState'

describe('States > SearchState', () => {
  it('should have products property', () => {
    expect(searchState.products).toBeDefined()
    expect(searchState.products).toBeInstanceOf(Array)
  })
})
