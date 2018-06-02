<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <section class="featured-posts">
      <PostPreview />
      <PostPreview />
      <PostPreview />
      <PostPreview />
    </section>
  </div>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'
export default {
  components: {
    PostPreview
  }
}
</script>


<style scoped>
.intro h1 {
  width: 80%;
  margin: 30px auto;
  padding: 10px;
  background-color: rgb(211, 211, 211);
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  text-align: center;
  font-size: 1.5rem;
  color: black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
