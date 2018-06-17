<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
    </section>
  </div>  
</template>

<script>
import axios from 'axios'
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
  components: {
    AdminPostForm
  },
  layout: 'admin',
  asyncData(context) {
    return axios.get(`https://nuxt-learning-blog.firebaseio.com/posts/${context.params.postId}.json`)
      .then(res => {
        return {
          loadedPost: res.data
        }
      })
      .catch(e => context.error(e))
  },
  methods: {
    onSubmitted(editedPost) {
      axios.put(`https://nuxt-learning-blog.firebaseio.com/posts/${this.$route.params.postId}.json`, editedPost)
        .then(res => {
          this.$router.push('/admin')
        })
        .catch(e => console.log(e))
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
