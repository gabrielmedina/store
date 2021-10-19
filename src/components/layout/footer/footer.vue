<template>
  <footer class="footer">
    <SvgLogo class="footer__logo" />
    <small class="footer__small">The best since 2021. 10001 - New York</small>
  </footer>
</template>

<script>
import SvgLogo from '~/assets/img/logo.svg?inline'

export default {
  name: 'LayoutFooter',
  components: {
    SvgLogo,
  }
}
</script>

<style lang="scss" scoped>
.footer {
  display: grid;
  gap: 16px;
  justify-content: center;
  padding: 48px 24px;
  background: #e5e5e5;

  @media screen and (min-width: 992px) {
    padding: 64px 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 64px;
  }
}

.footer__logo {
  justify-self: center;
  path {
    fill: #999;
  }
}

.footer__small {
  color: #555;
  font-size: .9rem;
}
</style>
