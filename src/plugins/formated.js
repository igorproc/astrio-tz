export const Formated = {
  formatedPrice (price = {}) {
    if(!price) return {}
    return new Intl.NumberFormat('en', {
      style: 'currency',
      currency: price.currency,
      maximumFractionDigits: 2
    }).format(price.value)
  },
  formatedAmount (currency, amount) {
    return new Intl.NumberFormat('en', {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: 2
    }).format(amount)
  }
}