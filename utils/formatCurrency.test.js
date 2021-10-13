import formatCurrency from '@/utils/formatCurrency'

describe('Utils > FormatCurrency', () => {
  it('when format() is called', () => {
    const value = 245.24

    expect(formatCurrency.format(value)).toEqual('R$ 245,24')
  })
})
