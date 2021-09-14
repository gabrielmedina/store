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
      default: () => [],
    }
  }
}
</script>
