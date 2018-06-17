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
    const postId = context.params.postId

    return axios.get(`${process.env.API_URL}/posts/${postId}.json`)
      .then(res => {
        return {
          loadedPost: {
            ...res.data,
            id: postId
          }
        }
      })
      .catch(e => context.error(e))
  },
  methods: {
    onSubmitted(editedPost) {
      console.dir(editedPost)
      this.$store.dispatch('editPost', editedPost)
      .then(() => {
        this.$router.push('/admin')
      })
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
