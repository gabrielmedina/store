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
import searchManager from '@/managers/searchManager'

import ProductList from '@/components/product/product-list'

export default {
  name: 'PageHome',
  components: {
    ProductList,
  },
  async asyncData({ route }) {
    const search = route.query.search

    if (search) {
      await searchManager.getByTerm(search)
    } else {
      await searchManager.get()
    }

    return {
      products: searchManager.getState().products
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
    $route() {
      this.$nuxt.refresh()
    },
  },
}
</script>
