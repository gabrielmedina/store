<template>
  <transition name="cart-transition">
    <div
      v-show="display"
      data-testid="cart"
      class="cart"
      role="dialog"
    >
      <section class="cart__content">
        <header class="cart__header">
          <h2
            ref="elementToInitialFocus"
            tabindex="-1"
            class="cart__title"
          >
            My cart
          </h2>

          <p class="cart__text">{{ cartText }}</p>

          <Button
            tag="button"
            data-testid="close"
            variant="transparent"
            affordance="icon"
            class="cart__close"
            @click="close"
          >
            <SvgClose>
              <title>Close cart</title>
            </SvgClose>
          </Button>
        </header>

        <CartList v-if="hasProducts" :products="products" />
      </section>

      <span
        ref="elementToFocusControl"
        data-testid="focus-trap"
        tabindex="0"
      />
    </div>
  </transition>
</template>

<script>
import cartManager from '@/managers/cartManager'
import domManager from '@/managers/domManager'

import Button from '@/components/button/button'
import CartList from '@/components/cart/cart-list'

import SvgClose from '~/assets/img/icons/close-outline.svg?inline'

export default {
  name: 'Cart',
  components: {
    CartList,
    Button,
    SvgClose,
  },
  computed: {
    display() {
      return cartManager.isOpened()
    },
    products() {
      return cartManager.getState().items
    },
    hasProducts() {
      return cartManager.hasItems()
    },
    cartText() {
      const productsQuantity = this.products.length

      if (productsQuantity === 1) return 'With 1 product'
      if (productsQuantity > 1) return `With ${productsQuantity} products`

      return 'This cart is empty'
    },
  },
  mounted() {
    const refs = this.$refs

    refs.elementToFocusControl.addEventListener('focus', () => {
      refs.elementToInitialFocus.focus()
    })
  },
  updated() {
    if (this.display) {
      this.$refs.elementToInitialFocus.focus()
    }
  },
  methods: {
    close() {
      cartManager.close()

      domManager.returnFocusToTriggerElement()
      domManager.enableBodyScroll(document.querySelector('body'))
    },
  },
}
</script>

<style lang="scss" scoped>
.cart {
  position: fixed;
  top: 0;
  right: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  background: rgba(0, 0, 0, 0.3);
}

.cart__content {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 0 24px 24px;
  background: #fff;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.06);

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

  &:focus {
    box-shadow: none;
  }
}

.cart__text {
  color: #757575;
}

.cart__close {
  position: absolute;
  top: 16px;
  right: 0;

  @media screen and (min-width: 768px) {
    top: 24px;
  }
}

.cart-transition-enter-active,
.cart-transition-leave-active {
  will-change: opacity;
  transition: opacity 0.3s ease;

  .cart__content {
    will-change: transform;
    transition: transform 0.3s ease;
  }
}
.cart-transition-enter,
.cart-transition-leave-to {
  opacity: 0;

  .cart__content {
    transform: translateY(20%);
  }

  @media screen and (min-width: 408px) {
    .cart__content {
      transform: translateX(100%);
    }
  }
}
</style>
