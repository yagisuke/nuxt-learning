<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted" />
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
  methods: {
    onSubmitted(postData) {
      const data = {
        ...postData,
        updatedDate: new Date()
      }
      axios.post('https://nuxt-learning.firebaseio.com/posts.json', data)
        .then(result => console.log(result))
        .catch(e => console.log(e))
    }
  }
}
</script>

<style>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
