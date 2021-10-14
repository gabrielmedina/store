<template>
  <div class="container">
    <ProductList
      v-if="hasProducts"
      :products="products"
    />
    <p v-else>
      Sorry! :/
    </p>
  </div>
</template>

<script>
import productManager from '@/managers/productManager'
import searchManager from '@/managers/searchManager'

import ProductList from '@/components/product/product-list'

export default {
  name: 'PageHome',
  components: {
    ProductList,
  },
  async asyncData({ route }) {
    const search = route.query.search

    let products = []

    if (search) {
      const response = await productManager.getByTerm(search)
      products = response.products
    } else {
      const response = await productManager.get()
      products = response.products
    }

    searchManager.setProducts(products)

    return {
      products: searchManager.getProducts()
    }
  },
  data() {
    return {
      products: [],
    }
  },
  head() {
    return {
      title: 'Store | The best of New York',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Your watch is here!'
        }
      ]
    }
  },
  computed: {
    hasProducts() {
      return this.products.length > 0
    }
  },
  watch: {
    async $route() {
      const search = this.$route.query.search

      let products = []

      if (search) {
        const response = await productManager.getByTerm(search)
        products = response.products
      } else {
        const response = await productManager.get()
        products = response.products
      }

      searchManager.setProducts(products)

      this.products = searchManager.getProducts()
    },
  },
}
</script>
