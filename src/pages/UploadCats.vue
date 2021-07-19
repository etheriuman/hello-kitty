<template>
  <form @submit.prevent="handleSubmit" class="upload-page-wrapper">
    <Navbar />
    <input
      ref="input"
      type="file"
      name="image"
      accept="image/png, image/jpeg"
      @change="setImage"
    />
    <div class="content d-flex justify-content-center align-items-center my-5">
      <section class="cropper-area w-50">
        <div v-show="initialImg" class="img-cropper text-center">
          <h4>幫喵喵修剪一下</h4>
          <Vue-cropper
            ref="cropper"
            class="my-3"
            :aspect-ratio="16 / 16"
            :src="initialImg"
          />
        </div>
      </section>
      <div class="actions mb-5">
        <button v-show="!isUploading" type="button" class="button btn btn-secondary text-light" @click.prevent="showFileChooser">
          召喚一隻喵喵
        </button>
      </div>
      <template v-if="!isUploading">
        <button v-if="initialImg" type="submit" class="btn btn-warning">發射！</button>
      </template>
      <template v-else>
        <button class="btn btn-secondary" disabled>喵喵飛行中...</button>
      </template>
    </div>
  </form>
</template>

<script>
import VueCropper from 'vue-cropperjs'
import 'cropperjs/dist/cropper.css'

import { Toast } from './../utils/helpers'
import apis from './../apis'

import Navbar from './../components/Navbar.vue'

export default {
  components: {
    Navbar,
    VueCropper
  },
  data() {
    return {
      initialImg: '',
      initialImgFile: null,
      cropImg: '',
      cropImgFile: null,
      isUploading: false
    }
  },
  methods: {
    // 上傳圖片並記錄圖片資料
    setImage(e) {
      const file = e.target.files[0]
      // 檢查口
      if (!this.checkFileSize(file)) {
        Toast.fire({
          icon: 'warning',
          title: '喵喵過肥，請不要超過500kb'
        })
        return
      }
      // 存入數據
      this.$refs.cropper.replace(window.URL.createObjectURL(file))
      this.initialImg = window.URL.createObjectURL(file)
      this.initialImgFile = file
    },
    // 修剪圖片並紀錄修剪後資料
    cropImage() {
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL()
      const cropImgBlob = this.dataURLtoBlob(this.cropImg)
      this.cropImgFile = this.blobToFile(cropImgBlob, 'kitty.png')
    },
    // 轉換dataURL為blob
    dataURLtoBlob(dataURL) {
      // 劃分出byteString
      const byteString = window.atob(dataURL.split(',')[1])
      // 劃分出mimeString
      const mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0]
      const ab = new ArrayBuffer(byteString.length)
      const ia = new Uint8Array(ab)
      for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i)
      }
      // 將ArrayBuffer轉換為blob
      const blob = new Blob([ab], {type: mimeString})
      return blob
    },
    // 將blob轉換為file
    blobToFile(blob, fileName) {
      const blobFile = new File([blob], fileName, {
        type: blob.type,
      })
      return blobFile
    },
    showFileChooser() {
      this.$refs.input.click()
    },
    checkFileSize(file) {
      return file.size <= 500 * 1024 // 500kb
    },
    // 修剪後上傳
    handleSubmit() {
      if (this.isUploading) {
        Toast.fire({
          icon: 'warning',
          title: '喵喵正在飛行，請等一下'
        })
        return
      }
      this.cropImage()
      const formData = new FormData()
      formData.append('file', this.cropImgFile, this.initialImgFileName)
      this.uploadImage(formData)
    },
    // 清空資料
    clearData() {
      this.initialImg = ''
      this.initialImgFile = null
      this.cropImg = ''
      this.cropImgFile = null
    },
    async uploadImage(formData) {
      try {
        this.isUploading = true
        const response = await apis.uploadImage(formData)
        this.uploadedImg = response.data
        this.isUploading = false
        Toast.fire({
          icon: 'success',
          title: '喵喵已經發射!!'
        })
        this.clearData()
      } catch(error) {
        this.isUploading = false
        this.clearData()
        Toast.fire({
          icon: 'error',
          title: '上傳失敗，不要發射奇怪的生物！'
        })
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
input {
  display: none;
}
.content {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
</style>