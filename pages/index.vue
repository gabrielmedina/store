<template>
  <ol>
    <li>
      <Card
        title="Watch Vintage V"
        text="$ 50,00"
        :image="{
          src: '/test.jpg',
          alt: 'Test'
        }"
      >
        <template #cta>
          <button>Add to cart</button>
        </template>
      </Card>
    </li>
  </ol>
</template>

<script>
import Card from '@/components/card/card'

export default {
  name: 'PageIndex',
  components: {
    Card,
  }
}
</script>
