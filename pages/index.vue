<template>
  <div class="container">
    <ProductList :products="products" />
  </div>
</template>

<script>
import ProductData from '@/assets/data/products'

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
      return ProductData
    }
  },
}
</script>
