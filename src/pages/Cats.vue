<template>
  <div class="cats-page-wrapper">
    <Navbar />
      <div class="gallery-wrapper">
        <Gallery :cats="cats" />
      </div>
      <div class="pagination-wrapper">
        <Pagination :current-page="currentPage" :pagination-max-count="paginationMaxCount" @onPginationChange="setCurrentPage" />
      </div>
  </div>
</template>

<script>
import { Toast } from './../utils/helpers'

import apis from './../apis'

import Navbar from './../components/Navbar.vue'
import Gallery from './../components/Gallery.vue'
import Pagination from './../components/Pagination.vue'

export default {
  name: 'home',
  components: {
    Navbar,
    Gallery,
    Pagination
  },
  data() {
    return {
      cats: [],
      currentPage: 0,
      paginationMaxCount: 0
    }
  },
  methods: {
    async getCatsWithPage(page) {
      try {
        const response = await apis.getAllImages(page)
        if (response.status !== 200) {
          throw new Error()
        }
        this.cats = [
          ...response.data
        ]
        this.paginationMaxCount = parseInt(response.headers['pagination-count'])
      } catch(error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法取得資料，請稍後再試'
        })
      }
    },
    async getFavourites() {
      try {
        const response = await apis.getAllFavourites()
        if (response.status !== 200) {
          throw new Error()
        }
        this.$store.commit('setFavourites', response.data)
      } catch(error) {
        this.loginIsReady = false
        Toast.fire({
          icon: 'error',
          title: '資料有誤'
        })
      }
    },
    setCurrentPage(page) {
      this.currentPage = page
    }
  },
  watch: {
    currentPage(newPage) {
      this.getCatsWithPage(newPage)
    } 
  },
  created() {
    this.getFavourites()
    this.getCatsWithPage(this.currentPage)
  }
}
</script>

<style scoped>
.cats-page-wrapper {
  width: 100%;
}
.gallery-wrapper {
  width: 100%;
  display: flex;
  margin: 50px 0;
  justify-content: center;
}
</style>