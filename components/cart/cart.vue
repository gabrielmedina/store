<template>
  <transition name="cart-transition">
    <div
      v-show="display"
      class="cart"
    >
      <section class="cart__content">
        <header
          v-if="!hasProducts"
          class="cart__header"
        >
          <h2 class="cart__title">My cart</h2>
          <p class="cart__text">This cart is empty</p>
        </header>

        <template v-else>
          <header class="cart__header">
            <h2 class="cart__title">My cart</h2>
            <p class="cart__text">With {{ products.length }} products</p>
          </header>

          <CartList :products="products" />
        </template>

        <ButtonIcon
          tag="button"
          class="cart__close"
          @click="close"
        >
          <SvgClose />
        </ButtonIcon>
      </section>
    </div>
  </transition>
</template>

<script>
import cartService from '@/services/cart'

import CartList from '@/components/cart/cart-list'
import ButtonIcon from '@/components/button/button-icon'

import SvgClose from '~/assets/img/icons/close-outline.svg?inline'

export default {
  name: 'Cart',
  components: {
    CartList,
    ButtonIcon,
    SvgClose
  },
  computed: {
    display() {
      return cartService.isOpened()
    },
    products() {
      return cartService.get()
    },
    hasProducts() {
      return cartService.hasItems()
    }
  },
  methods: {
    close() {
      cartService.close()
    }
  }
}
</script>

<style lang="scss" scoped>
.cart {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  background: rgba(0,0,0,.3);
}

.cart__content {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 0 24px 24px;
  background: #fff;
  box-shadow: 0 10px 10px rgba(0,0,0,.06);

  @media screen and (min-width: 408px) {
    width: 408px;
    padding: 0 40px 40px;
  }
}

.cart__header {
  display: grid;
  row-gap: 8px;
  position: sticky;
  top: 0;
  padding: 32px 0;
  background: #fff;

  @media screen and (min-width: 408px) {
    padding: 40px 0 24px;
  }
}

.cart__title {
  font-size: 1.25rem;
}

.cart__text {
  color: #777;
}

.cart__close {
  position: absolute;
  top: 16px;
  right: 24px;

  @media screen and (min-width: 768px) {
    top: 24px;
  }
}

.cart-transition-enter-active,
.cart-transition-leave-active {
  will-change: opacity;
  transition: opacity .3s ease;

  .cart__content {
    will-change: transform;
    transition: transform .3s ease;
  }
}
.cart-transition-enter,
.cart-transition-leave-to {
  opacity: 0;

  .cart__content {
    transform: translateX(100%);
  }
}
</style>
