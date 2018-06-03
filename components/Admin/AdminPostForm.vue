<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
    <AppControlInput v-model="editedPost.title">Title</AppControlInput>
    <AppControlInput v-model="editedPost.thumbnailLink">Thumbnail Link</AppControlInput>
    <AppControlInput control-type="textarea" v-model="editedPost.content">Content</AppControlInput>
    <AppButton
      type="button"
      style="margin-right: 10px"
      btn-style="cancel"
      @click="onCancel"
    >
      Cancel
    </AppButton>
    <AppButton type="submit">Save</AppButton>
  </form>
</template>

<script>
import AppControlInput from '@/components/UI/AppControlInput'
import AppButton from '@/components/UI/AppButton'

export default {
  components: {
    AppControlInput,
    AppButton
  },
  props: {
    post: {
      type: Object,
      reqired: false
    }
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
          author: '',
          title: '',
          thumbnailLink: '',
          content: ''
        }
    }
  },
  methods: {
    onSave() {
      // save the post
      console.log(this.editedPost)
    },
    onCancel() {
      // Navigate back
      this.$router.push('/admin')
    }
  }
}
</script>
