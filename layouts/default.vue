<template>
  <div>
    <Header>
      <template #logo>
        <h1>Store</h1>
      </template>

      <template #nav>
        <ul>
          <li><a href="#">Cart</a></li>
        </ul>
      </template>

      <form>
        <label for="form-search">Search</label>
        <input id="form-search" type="search" placeholder="What are you searching for?">
      </form>
    </Header>

    <main>
      <Nuxt />
      <Cart />
    </main>

    <Footer>
      <template #logo>
        <h1>Store</h1>
      </template>

      <small>The best since 2021. 10001 - New York</small>
    </Footer>
  </div>
</template>

<script>
import Header from '@/components/layout/header/header';
import Footer from '@/components/layout/footer/footer';

import Cart from '@/components/cart/cart';

export default {
  name: 'LayoutDefault',
  components: {
    Header,
    Footer,
    Cart
  }
}
</script>
