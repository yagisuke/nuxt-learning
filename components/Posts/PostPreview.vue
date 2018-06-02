<template>
  <nuxt-link :to="'/posts/' + 1" class="post-preview">
    <article>
      <div class="post-thumbnail" style="background-image: url('https://img13.shop-pro.jp/PA01071/419/etc/MK5263054747-150%A5%A4%A5%E1%A1%BC%A5%B8.jpg');"></div>
      <div class="post-content">
        <h1>post title4</h1>
        <p>preview text4</p>
      </div>
    </article>
  </nuxt-link>
</template>

<style scoped>
.post-preview {
  width: 90%;
  margin: 10px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a {
  color: #404040;
  text-decoration: none;
}

a:hover {
  opacity: 0.75;
}
</style>
