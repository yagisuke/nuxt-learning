<template>
  <div>
    <TheHeader
      @sidenavToggle="displaySidenav = !displaySidenav"
    />
    <TheSidenav
      :seen="displaySidenav"
      @close="displaySidenav = false"
    />
    <nuxt/>
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader'
import TheSidenav from '@/components/Navigation/TheSidenav'

export default {
  components: {
    TheHeader,
    TheSidenav
  },
  middleware: 'log',
  data() {
    return {
      displaySidenav: false
    }
  }
}
</script>
