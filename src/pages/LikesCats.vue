<template>
  <div class="cats-page-wrapper">
    <Navbar />
      <div class="gallery-wrapper">
        <Gallery :cats="favourites" />
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Navbar from './../components/Navbar.vue'
import Gallery from './../components/Gallery.vue'

export default {
  name: 'likes-cats',
  components: {
    Navbar,
    Gallery
  },
  data() {
    return {
      currentPage: 0,
      paginationMaxCount: 0
    }
  },
  computed: {
    ...mapState(['favourites'])
  }
}
</script>