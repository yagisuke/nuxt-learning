<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AminPostForm :post="loadedPost" />
    </section>
  </div>  
</template>

<script>
import AminPostForm from '@/components/Admin/AdminPostForm'

export default {
  components: {
    AminPostForm
  },
  layout: 'admin',
  data() {
    return {
      loadedPost: {
        author: 'yagisuke',
        title: 'title1',
        content: 'content1',
        thumbnailLink: 'http://marimek-prod.item.photo/product/52_1_5263009231/52_1_5263009231_main.jpg'
      }
    }
  }
}
</script>


<style scoped>
.admin-post-page {
  text-align: center;
  padding: 30px;
}
</style>

