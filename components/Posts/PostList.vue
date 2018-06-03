<template>
  <section class="post-list">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      thumbnail="http://marimek-prod.item.photo/product/52_1_5263009231/52_1_5263009231_main.jpg"
      title="title 1"
      previewText="preview text 1"
      />
  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.post-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
