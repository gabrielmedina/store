<template>
  <ol class="product-list">
    <li
      v-for="(item, index) in 24"
      :key="index"
      class="product-list__item"
    >
      <ProductListItem />
    </li>
  </ol>
</template>

<script>
import ProductListItem from '@/components/product/product-list-item'

export default {
  name: 'ProductList',
  components: {
    ProductListItem,
  }
}
</script>

<style lang="scss" scoped>
.product-list {
  display: inline-grid;
  row-gap: 32px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media screen and (min-width: 426px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>
