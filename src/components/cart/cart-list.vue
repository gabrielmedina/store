<template>
  <ol class="cart-list">
    <li
      v-for="product in products"
      :key="product.id"
      class="cart-list__item"
    >
      <CartListItem :product="product" />
    </li>
  </ol>
</template>

<script>
import CartListItem from '@/components/cart/cart-list-item'

export default {
  name: 'CartList',
  components: {
    CartListItem,
  },
  props: {
    products: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-list {
  display: grid;
  row-gap: 24px;
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
