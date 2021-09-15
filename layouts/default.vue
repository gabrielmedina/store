<template>
  <div class="default">
    <Header class="default__header">
      <template #logo>
        <SvgLogo />
      </template>

      <template #nav>
        <Nav />
      </template>

      <FormSearch />
    </Header>

    <main>
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
}
</script>


    Breadcrumb<style lang="scss" scoped>
.default {
  font-family: 'Roboto', sans-serif;
  min-height: 100vh;
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

.default__footer {
  margin-top: 56px;
}
</style>
