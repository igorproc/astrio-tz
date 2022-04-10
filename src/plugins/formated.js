export const Formated = {
  formatedPrice (price = {}) {
    if(!price) return {}
    if(!price?.currency) return new Intl.NumberFormat('en-US', {
      style: 'currency',
      maximumFractionDigits: 2,
      currency: 'USD'
    }).format(price.value)
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: price.currency,
      maximumFractionDigits: 2
    }).format(price.value)
  }
}