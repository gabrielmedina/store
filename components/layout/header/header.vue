<template>
  <header class="header">
    <div class="header__logo">
      <nuxt-link
        class="header__logo-link"
        to="/"
      >
        <h1 class="header__logo-content">
          <slot name="logo" />
        </h1>
      </nuxt-link>
    </div>

    <div class="header__content">
      <slot />
    </div>

    <nav class="header__nav">
      <slot name="nav" />
    </nav>
  </header>
</template>

<script>
export default {
  name: 'LayoutHeader',
}
</script>

<style lang="scss" scoped>
.header {
  display: grid;
  grid-template-areas:
    'logo nav'
    'content content';
  row-gap: 16px;
  align-items: center;
  padding: 16px 24px;
  background: #fff;

  @media screen and (min-width: 768px) {
    padding: 24px;
  }

  @media screen and (min-width: 992px) {
    grid-template-areas: 'logo content nav';
    grid-template-columns: auto 1fr 1fr;
    column-gap: 32px;
    padding: 24px 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 48px 64px;
  }
}

.header__logo {
  grid-area: logo;
}

.header__logo-link {
  display: inline-flex;
}

.header__logo-content {
  margin: 0;
}

.header__content {
  grid-area: content;
}

.header__nav {
  grid-area: nav;
  justify-self: end;
}
</style>
