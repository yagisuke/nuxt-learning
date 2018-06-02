<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <section class="featured-posts">
      <nuxt-link :to="'/posts/' + 1">
        <article class="post-preview">
          <div class="post-thumbnail" style="background-image: url('https://img13.shop-pro.jp/PA01071/419/etc/MK5263054747-150%A5%A4%A5%E1%A1%BC%A5%B8.jpg');"></div>
          <h1>post title1</h1>
          <p>preview text1</p>
        </article>
      </nuxt-link>
      <nuxt-link :to="'/posts/' + 2">
        <article class="post-preview">
          <div class="post-thumbnail" style="background-image: url('https://img13.shop-pro.jp/PA01071/419/etc/MK5263054747-150%A5%A4%A5%E1%A1%BC%A5%B8.jpg');"></div>
          <h1>post title2</h1>
          <p>preview text2</p>
        </article>
      </nuxt-link>
      <nuxt-link :to="'/posts/' + 3">
        <article class="post-preview">
          <div class="post-thumbnail" style="background-image: url('https://img13.shop-pro.jp/PA01071/419/etc/MK5263054747-150%A5%A4%A5%E1%A1%BC%A5%B8.jpg');"></div>
          <h1>post title3</h1>
          <p>preview text3</p>
        </article>
      </nuxt-link>
      <nuxt-link :to="'/posts/' + 4">
        <article class="post-preview">
          <div class="post-thumbnail" style="background-image: url('https://img13.shop-pro.jp/PA01071/419/etc/MK5263054747-150%A5%A4%A5%E1%A1%BC%A5%B8.jpg');"></div>
          <h1>post title4</h1>
          <p>preview text4</p>
        </article>
      </nuxt-link>
    </section>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: black;
}

.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  width: 90%;
  margin: 10px auto;
  text-align: center;
}

@media (min-width: 850px) {
  .post-preview {
    display: inline-block;
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}
</style>
