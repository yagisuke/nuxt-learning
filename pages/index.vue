<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <section class="featured-posts">
      <PostPreview
        id="1"
        thumbnail="http://marimek-prod.item.photo/product/52_1_5263009231/52_1_5263009231_main.jpg"
        title="title 1"
        previewText="preview text 1"
      />
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
.intro {
  position: relative;
  height: 250px;
  padding: 30px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url('~assets/images/main_page_cover.jpg');
}

.intro h1 {
  position: absolute;
  top: 50%;
  left: 5%;
  width: 90%;
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
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
