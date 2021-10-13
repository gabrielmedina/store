class FormatCurrency {
  constructor() {
    this.formatCurrency = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2
    })
  }

  format(value) {
    return this.formatCurrency.format(value)
  }
}

export default new FormatCurrency
