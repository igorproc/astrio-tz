import axios from 'axios'

export const Api = {
  async getBrandsList () {
    return await axios.get('https://raw.githubusercontent.com/fe-side/vue-test/master/assets/brands.json')
  },

  async getProductList () {
    const { data } = await axios.get('https://raw.githubusercontent.com/fe-side/vue-test/master/assets/products.json')
    return data
  },

  async getBrandById (id) {
    const { data } = await this.getBrandsList()
    return data.find(brand => brand.id === id)
  }
}