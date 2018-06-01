<template>
  <header class="header">
    <ul class="nav-items">
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/users">Users</nuxt-link></li>
      <li><nuxt-link to="/products">Products</nuxt-link></li>
    </ul>
  </header>
</template>

<style>
.header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-content: center;
  background: yellow;
  border-bottom: 1px dotted gray;
}

.nav-items {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
}

.nav-items a {
  text-decoration: none;
  font-weight: 600;
  color: gray;
}

.nav-items a:hover {
  border-bottom: 1px solid gray;
}
</style>
