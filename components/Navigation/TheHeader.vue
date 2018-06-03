<template>
  <div class="header-container">
    <header class="the-header">
      <TheSidenavToggle @toggle="$emit('sidenavToggle')" />
      <div class="logo">
        <nuxt-link to="/">YAGISUKE BLOG</nuxt-link>
      </div>
      <div class="spacer"></div>
      <div class="navigation-items">
        <ul class="nav-list">
          <li class="nav-item"><nuxt-link to="/posts">Blog</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/admin">Admin</nuxt-link></li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
import TheSidenavToggle from "@/components/Navigation/TheSidenavToggle";

export default {
  name: "TheHeader",
  components: {
    TheSidenavToggle
  }
};
</script>

<style scoped>
.header-container {
  height: 60px;
}

.the-header {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  background-color: yellow;
  padding: 0 20px;
  z-index: 100;
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;
}

.logo a {
  text-decoration: none;
  color: gray;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
  color: gray;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: lightcoral;
}
</style>
