<template>
  <div class="single-post-page">
    <section class="post">
      <h1>Title of the post</h1>
      <div class="post-details">
        <div class="post-detail">Last updated on XXX</div>
        <div class="post-detail">Written by NAME</div>
      </div>
      <p>Content of the post</p>
    </section>
    <section class="post-feedback">
      <p>Let me know what you think about the post, send a mail to
        <a href="mailto:yagisuke.0209@gmail.com">yagisuke.0209@gmail.com.</a>
      </p>
    </section>
  </div>  
</template>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback {
  border-top: 1px solid rgb(88, 88, 88);
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover {
  color: salmon;
}
</style>

