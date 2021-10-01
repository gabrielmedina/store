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
            {{ product.description }}
          </p>

          <p class="product-details__price">
            {{ product.price }}
          </p>

          <Button
            variant="primary"
            @click="addToCart"
          >
            Add to cart
          </Button>
        </div>

        <div class="product-details__gallery">
          <figure class="product-details__figure">
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
import productsData from '@/assets/data/products'

import cartService from '@/services/cartService'

import Breadcrumb from '@/components/breadcrumb/breadcrumb'

export default {
  name: 'PageProduct',
  components: {
    Breadcrumb,
  },
  asyncData({ route }) {
    const product = productsData.find(
      (product) => product.id === route.params.id
    )
    // const product = await api.getProduct({ id: route.params.id })

    return {
      product,
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
  },
  methods: {
    addToCart() {
      cartService.add(this.product)
    },
  },
}
</script>

<style lang="scss" scoped>
.product-details {
  display: grid;
  row-gap: 32px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 448px auto;
    column-gap: 32px;
  }

  @media screen and (min-width: 992px) {
    column-gap: 48px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: 712px auto;
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
  color: #777;
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
