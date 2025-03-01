<template>
  <div class="product">
    <div class="container">
      <Breadcrumb :links="breadcrumb" />

      <article class="product-details">
        <div class="product-details__content">
          <h1 class="product-details__title">
            {{ product.title }}
          </h1>

          <p class="product-details__text">
            {{ product.summary }}
          </p>

          <p class="product-details__text">
            {{ product.description }}
          </p>

          <p class="product-details__price">
            {{ price }}
          </p>

          <Button
            data-testid="add"
            variant="primary"
            @click="addToCart"
          >
            Add to cart
          </Button>
        </div>

        <div class="product-details__gallery">
          <figure v-if="product.image" class="product-details__figure">
            <img
              class="product-details__image"
              :src="product.image.src"
              :alt="product.image.alt"
            />
          </figure>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import productManager from '@/managers/productManager'
import cartManager from '@/managers/cartManager'
import domManager from '@/managers/domManager'

import formatCurrency from '@/utils/formatCurrency'

import Breadcrumb from '@/components/breadcrumb/breadcrumb'

export default {
  name: 'PageProductDetail',
  components: {
    Breadcrumb,
  },
  async asyncData({ route }) {
    const product = await productManager.getById(route.params.id)

    return {
      product
    }
  },
  data() {
    return {
      product: {}
    }
  },
  head() {
    return {
      title: `${this.product.title} | Store`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.product.summary}`,
        },
      ],
    }
  },
  computed: {
    breadcrumb() {
      return [
        {
          title: 'Home',
          path: '/',
        },
        {
          title: this.product.title,
          path: this.$route.path,
        },
      ]
    },
    price() {
      return formatCurrency.format(this.product.price)
    },
  },
  methods: {
    addToCart(event) {
      cartManager.add(this.product)

      domManager.setTriggerElementFocus(event.target)
      domManager.disableBodyScroll(document.querySelector('body'))
    },
  },
}
</script>

<style lang="scss" scoped>
.product-details {
  display: grid;
  row-gap: 32px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 50% auto;
    column-gap: 32px;
  }

  @media screen and (min-width: 992px) {
    column-gap: 48px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: 50% auto;
    column-gap: 64px;
  }
}

.product-details__content {
  display: grid;
  row-gap: 16px;

  @media screen and (min-width: 768px) {
    order: 2;
    align-content: start;
  }

  @media screen and (min-width: 992px) {
    row-gap: 24px;
  }
}

.product-details__title {
  font-size: 1.25rem;

  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 992px) {
    font-size: 1.8rem;
  }
}

.product-details__text {
  color: #6E6E6E;
  line-height: 1.6;
}

.product-details__price {
  margin-top: 16px;

  @media screen and (min-width: 992px) {
    font-size: 1.2rem;
    margin-bottom: 16px;
  }
}

.product-details__gallery {
  @media screen and (min-width: 768px) {
    order: 1;
  }
}

.product-details__figure {
  overflow: hidden;
  border-radius: 4px;
  background: #e5e5e5;
}

.product-details__image {
  display: block;
  width: 100%;
}
</style>
