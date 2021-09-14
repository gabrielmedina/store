<template>
  <transition name="cart-transition">
    <div
      v-if="display"
      class="cart"
    >
      <section class="cart__content">
        <h2 class="cart__title">My cart</h2>
        <p
          v-if="!hasProducts"
          class="cart__text"
        >
          This cart is empty
        </p>

        <CartList
          v-else
          :products="products"
        />

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
  props: {
    display: {
      type: Boolean,
      default: false,
    },
    products: {
      type: Array,
      default: () => [],
    }
  },
  computed: {
    hasProducts() {
      return this.products.length > 0;
    }
  },
  methods: {
    close() {
      this.$emit('close');
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
  padding: 40px;
  background: #fff;
  box-shadow: 0 10px 10px rgba(0,0,0,.06);

  @media screen and (min-width: 408px) {
    width: 408px;
  }
}

.cart__title {
  margin-bottom: 16px;
  font-size: 1.25rem;
}

.cart__text {
  color: #777;
  font-size: 1rem;
}

.cart__close {
  position: absolute;
  top: 16px;
  right: 16px;
}

.card-transition-enter-active,
.card-transition-leave-active {
  opacity: 1;

  .cart__content {
    transform: translateX(0);
  }
}
.card-transition-enter,
.card-transition-leave-to {
  opacity: 0;

  .cart__content {
    transform: translateX(-100%);
  }
}
</style>
