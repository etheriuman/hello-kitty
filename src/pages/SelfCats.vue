<template>
  <div class="selfCats-page-wrapper">
    <Navbar />
    <div class="gallery-wrapper">
        <Gallery :cats="cats" />
    </div>
    <Pagination :current-page="currentPage" :pagination-max-count="paginationMaxCount" @onPginationChange="setCurrentPage" />
  </div>
</template>

<script>
import { Toast } from './../utils/helpers'
import apis from './../apis'

import Navbar from './../components/Navbar.vue'
import Gallery from './../components/Gallery.vue'
import Pagination from './../components/Pagination.vue'

export default {
  name: 'self-cats',
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
    async getUploads(page) {
      try {
        const response = await apis.getUploadImages(page)
        if (response.status !== 200) {
          throw new Error()
        }
        this.cats = [...response.data]
        this.paginationMaxCount = parseInt(response.headers['pagination-count'])
      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得資料，請稍後再試'
        })
        console.log(error)
      }
    },
    setCurrentPage(page) {
      this.currentPage = page
    }
  },
  watch: {
    currentPage(newPage) {
      this.getUploads(newPage)
    } 
  },
  created() {
    this.getUploads(this.currentPage)
  }
}
</script>

<style scoped>

</style>