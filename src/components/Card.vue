<template>
  <div class="card col-10 col-md-3">
    <img :src="cat.url" alt="cute-cats">
    <template v-if="isImageFavourited(cat.id)">
      <div @click.prevent.stop="dislikeButtonOnClick(cat.id)" class="like-button">&#128148;</div>
    </template>
    <template v-else>
      <div @click.prevent.stop="likeButtonOnClick(cat.id)" class="like-button">&#128150;</div>
    </template>
  </div>
</template>

<script>
import { Toast } from './../utils/helpers'
import { mapState } from 'vuex'

import apis from './../apis'

export default {
  name: 'card',
  props: {
    cat: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState(['favourites']),
  },
  methods: {
    isImageFavourited(imageId) {
      return this.favourites.some(cat => cat.image_id === imageId)
    },
    async likeButtonOnClick(imageId) {
      try {
        this.isProcessing = true
        const response = await apis.addFavourite(imageId)
        if (response.status !== 200) {
          throw new Error()
        }
        this.$store.dispatch('fetchFavourites')
        Toast.fire({
          icon: 'success',
          title: '你收服了這隻喵喵 :)'
        })
      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '收藏失敗，請稍候再試'
        })
      }
    },
    async dislikeButtonOnClick(imageId) {
      try {
        const favouriteId = this.favourites.find(cat => cat.image_id === imageId).id
        const response = await apis.deleteFavourite(favouriteId)
        if (response.status !== 200) {
          throw new Error()
        }
        this.$store.dispatch('fetchFavourites')
        Toast.fire({
          icon: 'success',
          title: '你遣散了這隻喵喵 :('
        })
      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '遣散失敗，請稍候再試'
        })
      }
    }
  }
}
</script>

<style scoped>
.card {
  position: relative;
  margin: 15px;
  padding: 0;
  overflow: hidden;
  height: 200px;
}
.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.like-button {
  display: block;
  position: absolute;
  font-size: 2rem;
  width: 30px;
  height: 30px;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
</style>