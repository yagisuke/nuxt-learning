<template>
  <section>
    <ul v-for="product in products" :key="product.code">
      <li>
        <nuxt-link :to="/products/ + product.code">
          {{ product.name }}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          name: 'OK',
          code: 200
        },
        {
          name: 'Not Found',
          code: 404
        },
        {
          name: 'Internal Server Error',
          code: 500
        }
      ]
    }
  }
}
</script>
