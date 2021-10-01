import cartState from '@/states/cartState'

describe('States > CartState', () => {
  it('should have items property', () => {
    expect(cartState.items).toBeDefined()
    expect(cartState.items).toBeInstanceOf(Array)
  })

  it('should have opened property', () => {
    expect(cartState.opened).toBeDefined()
  })
})
