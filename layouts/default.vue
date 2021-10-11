<template>
  <div class="default">
    <Header class="default__header">
      <template #logo>
        <SvgLogo />
      </template>

      <template #nav>
        <Nav />
      </template>

      <FormSearch
        :initial-value="querySearch"
        @submit="doSearch"
      />
    </Header>

    <main class="default__main">
      <Nuxt />
      <Cart id="cart" />
    </main>

    <Footer class="default__footer" />
  </div>
</template>

<script>
import Header from '@/components/layout/header/header'
import Footer from '@/components/layout/footer/footer'
import Nav from '@/components/layout/nav/nav'
import Cart from '@/components/cart/cart'
import FormSearch from '@/components/form-search/form-search'

import SvgLogo from '~/assets/img/logo.svg?inline'

export default {
  name: 'LayoutDefault',
  components: {
    Header,
    Footer,
    Nav,
    Cart,
    FormSearch,
    SvgLogo,
  },
  computed: {
    querySearch() {
      const querySearch = this.$route.query.search

      if (!querySearch) return undefined

      return querySearch
    }
  },
  methods: {
    doSearch(value) {
      this.$router.push({
        name: 'index',
        query: {
          search: value
        }
      })
    },
  }
}
</script>


<style lang="scss" scoped>
.default {
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  min-height: calc(100vh + 64px);
  background: #F2F2F2;
}

.default__header {
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 992px) {
    margin-bottom: 48px;
  }
}

.default__nav {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.default__nav-item {
  @media screen and (min-width: 992px) {
    & + & {
      margin-left: 16px;
    }
  }
}

.default__main {
  margin-bottom: 56px;
}

.default__footer {
  margin-top: auto;
}
</style>
