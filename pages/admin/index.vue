<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton
        @click="$router.push('/admin/new-post')"
      >
        Create Post
      </AppButton>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <PostList isAdmin :posts="loadedPosts" />
    </section>
  </div>  
</template>

<script>
import PostList from '@/components/Posts/PostList'
import AppButton from '@/components/UI/AppButton'

export default {
  layout: 'admin',
  components: {
    PostList,
    AppButton
  },
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
          {
            id: '1',
            title: 'first post',
            previewText: 'this is our first post',
            thumbnail: 'http://marimek-prod.item.photo/product/52_1_5263009231/52_1_5263009231_main.jpg'
          },
          {
            id: '2',
            title: '2nd post',
            previewText: 'this is our first post',
            thumbnail: 'http://marimek-prod.item.photo/product/52_1_5263009231/52_1_5263009231_main.jpg'
          },
          {
            id: '3',
            title: '3rd post',
            previewText: 'this is our first post',
            thumbnail: 'http://marimek-prod.item.photo/product/52_1_5263009231/52_1_5263009231_main.jpg'
          }
        ]
      })
    }, 1500)
  }
}
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid lightgray;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>

