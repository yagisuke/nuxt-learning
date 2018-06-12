<template>
  <PostList :posts="loadedPosts" />
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
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
