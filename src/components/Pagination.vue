<template>
  <div class="d-flex w-100 justify-content-center">
    <ul class="pagination w-100 d-flex justify-content-center">
      <li v-if="paginationMaxCount > pageAmount" @click.stop="decreaseOffset" class="page-item" :class="['page-item', { disabled: !paginationOffset }]">
        <span class="page-link">&laquo;</span>
      </li>
      <li
        @click.stop="paginationOnclick(index + paginationOffset)"
        v-for="index of pageAmount"
        :key="index"
        :class="['page-item', {active: index + paginationOffset === currentPage + 1 } ]"
      >
        <span class="page-link">{{ index + paginationOffset }}</span>
      </li>
      <li v-if="paginationMaxCount > pageAmount" @click.stop="increaseOffset" class="page-item">
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
      pageAmount: 10,
      paginationOffset: 0
    }
  },
  methods: {
    paginationOnclick(page) {
      this.$emit('onPginationChange', page - 1)
    },
    increaseOffset() {
      const currentMaxPage = this.pageAmount + this.paginationOffset
      if (currentMaxPage >= this.paginationMaxCount) {
        return
      }
      this.paginationOffset += this.pageAmount
    },
    decreaseOffset() {
      if (!this.paginationOffset) {
        return
      }
      this.paginationOffset -= this.pageAmount
    }
  },
  watch: {
    paginationMaxCount(count) {
      this.pageAmount = count > 10 ? 10 : count
    }
  }
}
</script>

<style scoped>
.pagination {
  cursor: pointer;
}
</style>