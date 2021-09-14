<template>
  <div class="container">
    <ProductList />
  </div>
</template>

<script>
import ProductList from '@/components/product/product-list'

export default {
  name: 'PageIndex',
  components: {
    ProductList,
  }
}
</script>
