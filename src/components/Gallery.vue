<template>
  <div class="gallery d-flex justify-content-center row">
    <Card v-for="cat in cats" :key="cat.id" :cat="cat" />
  </div>
</template>

<script>
import Card from './../components/Card.vue'

export default {
  name: 'gallery',
  components: {
    Card
  },
  props: {
    cats: {
      type: Array,
      required: true
    }
  },
  created() {
    this.$store.dispatch('fetchFavourites')
  }
}
</script>

<style scoped>
.gallery {
  width: 75%;
  margin: 0 auto;
}
</style>