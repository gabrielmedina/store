<template>
  <div class="container">
    <ProductList :products="products" />
  </div>
</template>

<script>
import ProductData from '@/assets/data/products'

import ProductList from '@/components/product/product-list'

export default {
  name: 'PageIndex',
  components: {
    ProductList,
  },
  computed: {
    products() {
      return ProductData;
    }
  }
}
</script>
