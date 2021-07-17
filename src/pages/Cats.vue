<template>
  <div class="home-page-wrapper">
    <Navbar />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'home',
  components: {
    Navbar
  },
  data() {
    return {
      cats: []
    }
  },
  created() {
    
  }
}
</script>