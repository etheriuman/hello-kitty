<template>
  <div class="d-flex w-100 justify-content-center mb-5">
    <ul class="pagination w-100 d-flex justify-content-center">
      <li v-if="pageAmount >= 10" @click.stop="decreaseOffset" class="page-item" :class="['page-item', { disabled: !paginationStart }]">
        <span class="page-link">&laquo;</span>
      </li>
      <li
        @click.stop="paginationOnclick(index + paginationStart)"
        v-for="index of pageAmount"
        :key="index"
        :class="['page-item', {active: index + paginationStart === currentPage + 1 } ]"
      >
        <span class="page-link">{{ index + paginationStart }}</span>
      </li>
      <li v-if="pageAmount >= 10" @click.stop="increaseOffset" class="page-item">
        <span class="page-link">&raquo;</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  props: {
    currentPage: {
      type: Number,
      default: 0
    },
    paginationMaxCount: {
      type: Number,
      default: -1
    }
  },
  data() {
    return {
      pageAmount: 0,
      paginationStart: 0,
      pageLimit: 9
    }
  },
  methods: {
    paginationOnclick(page) {
      this.$emit('onPginationChange', page - 1)
    },
    increaseOffset() {
      const currentMaxPage = this.pageAmount + this.paginationStart
      if (currentMaxPage >= this.paginationMaxCount) {
        return
      }
      this.paginationStart += this.pageAmount
      this.$emit('onPginationChange', this.paginationStart)
    },
    decreaseOffset() {
      if (!this.paginationStart) {
        return
      }
      this.paginationStart -= this.pageAmount
      this.$emit('onPginationChange', this.paginationStart)
    }
  },
  watch: {
    paginationMaxCount(count) {
      // this.pageAmount = count > 10 ? 10 : count
      this.pageAmount = Math.ceil(count / this.pageLimit) > 10 ? 10 : Math.ceil(count / this.pageLimit)
    }
  }
}
</script>

<style scoped>
.pagination {
  cursor: pointer;
}
</style>