<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
    </section>
  </div>  
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
  components: {
    AdminPostForm
  },
  layout: 'admin',
  middleware: ['check-auth', 'auth'],
  asyncData(context) {
    const postId = context.params.postId

    return context.app.$axios.$get(`/posts/${postId}.json`)
      .then(data => {
        return {
          loadedPost: {
            ...data,
            id: postId
          }
        }
      })
      .catch(e => context.error(e))
  },
  methods: {
    onSubmitted(editedPost) {
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
