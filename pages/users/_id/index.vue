<template>
  <section>
    {{ $route.params.id }}
  </section>
</template>

<script>
export default {
  validate(data) {
    return /^\d+$/.test(data.params.id)
  }
}
</script>
