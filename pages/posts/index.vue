<template>
  <PostList :posts="loadedPosts" />
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPosts: [
            {
              id: '1',
              title: '1st post',
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
      }, 1000)
    })
    .then(data => {
      return data
    })
    .catch(e => {
      context.error(new Error())
    })
  },
  created() {
    this.$store.dispatch('setPosts', this.loadedPosts)
  }
}
</script>
