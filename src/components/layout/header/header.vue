<template>
  <header class="header">
    <div class="header__logo">
      <nuxt-link
        data-testid="home"
        class="header__logo-link"
        to="/"
      >
        <h1 class="header__logo-content">
          <slot name="logo" />
        </h1>
      </nuxt-link>
    </div>

    <div class="header__form">
      <slot />
    </div>

    <div class="header__nav">
      <slot name="nav" />
    </div>
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
    'form form';
  row-gap: 16px;
  align-items: center;
  padding: 16px 24px;
  background: #fff;

  @media screen and (min-width: 768px) {
    padding: 24px;
  }

  @media screen and (min-width: 992px) {
    grid-template-areas: 'logo form nav';
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

.header__form {
  grid-area: form;
  max-width: 448px;
}

.header__nav {
  grid-area: nav;
  justify-self: end;
}
</style>
