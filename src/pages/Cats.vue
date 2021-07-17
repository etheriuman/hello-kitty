<template>
  <div class="cats-page-wrapper">
    <Navbar />
    <div class="content">
      <div class="cats-wrapper">
        <div v-for="cat in cats" :key="cat.id" class="cat"></div>
      </div>
      <div class="pagination-wrapper">
        <Pagination :current-page="currentPage" :pagination-max-count="paginationMaxCount" @onPginationChange="setCurrentPage" />
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from './../utils/helpers'

import apis from './../apis'

import Navbar from '../components/Navbar.vue'
import Pagination from './../components/Pagination.vue'

export default {
  name: 'home',
  components: {
    Navbar,
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
    console.log('created')
    this.getCatsWithPage(this.currentPage)
  }
}
</script>

<style scoped>
</style>