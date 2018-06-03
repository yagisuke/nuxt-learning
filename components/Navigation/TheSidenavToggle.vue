<template>
  <div
    class="drawer-toggle"
    role="button"
    @click="$emit('toggle')"
  >
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </div>
</template>

<style scoped>
.drawer-toggle {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  width: 35px;
  cursor: pointer;
}

@media (min-width: 768px) {
  .drawer-toggle {
    display: none;
  }
}

.drawer-toggle .bar {
  display: block;
  width: 90%;
  height: 2px;
  background-color: gray;
}
</style>
