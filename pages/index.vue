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
import productService from '@/services/productService'
import searchService from '@/services/searchService'

import ProductList from '@/components/product/product-list'

export default {
  name: 'PageHome',
  components: {
    ProductList,
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
    products() {
      this.updateProducts()

      return searchService.getProducts()
    },
    hasProducts() {
      return this.products.length > 0
    }
  },
  methods: {
    updateProducts() {
      const search = this.$route.query.search

      let products = []

      if (search) {
        products = productService.getByTerm(search)
      } else {
        products = productService.get()
      }

      searchService.setProducts(products)
    },
  },
}
</script>
