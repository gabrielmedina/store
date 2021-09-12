<template>
  <section class="cart">
    <h2 class="cart__title">My cart</h2>
    <p
      v-if="!hasProducts"
      class="cart__text"
    >
      This cart is empty
    </p>
    <ol
      v-else
      class="cart__list"
    >
      <li>
        <CartItem />
      </li>
    </ol>
  </section>
</template>

<script>
import CartItem from '@/components/cart/cart-item';

export default {
  name: 'Cart',
  components: {
    CartItem,
  },
  props: {
    products: {
      type: Array,
      default: () => [],
    }
  },
  computed: {
    hasProducts() {
      return this.products.length > 0;
    }
  }
}
</script>
