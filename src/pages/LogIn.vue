<template>
  <div class="login-page-wrapper container w-100">
    <div class="row justify-content-center my-5">
      <div class="logo text-center">
        <h2>Hello! Kitty</h2>
      </div>
      <form @submit.prevent="loginSubmited" class="login-form col-8 my-5">
        <div class="form-group mb-3">
          <label for="account">帳號</label>
          <input v-model="account" type="text" class="form-control" id="account" aria-describedby="emailHelp">
        </div>
        <div class="form-group mb-3">
          <label for="password">密碼</label>
          <input v-model="password" type="password" class="form-control" id="password">
        </div>
        <button type="submit" class="btn btn-outline-primary">登入</button>
      </form>
    </div>
  </div>
</template>

<script>
import { Toast } from './../utils/helpers'

const dummyUser = {
  name: 'ArtzyMan',
  account: 'artzycool',
  password: '12344321',
  key: '430e08ac-f8ba-429b-be6e-28202c71b252'
}

export default {
  name: 'login',
  data() {
    return {
      account: '',
      password: '',
      loginIsReady: false
    }
  },
  methods: {
    loginSubmited() {
      this.checkLoginInput()
      if (!this.loginIsReady) {
        return
      }
      Toast.fire({
        icon: 'success',
        title: `歡迎登入，${dummyUser.name}`
      })
      localStorage.setItem('key', dummyUser.key)
      this.$router.push('/cats')
    },
    checkLoginInput() {
      // 確認輸入是否完成
      if (!this.account) {
        Toast.fire({
          icon: 'warning',
          title: '請輸入帳號'
        })
        return
      }
      if (!this.password) {
        Toast.fire({
          icon: 'warning',
          title: '請輸入密碼'
        })
        return
      }
      // 確認假帳密是否相符
      if (this.account !== dummyUser.account) {
        Toast.fire({
          icon: 'warning',
          title: '請輸入正確帳號'
        })
        return
      }
      if (this.password !== dummyUser.password) {
        Toast.fire({
          icon: 'warning',
          title: '密碼有誤'
        })
        return
      }
      this.loginIsReady = true
    }
  }
}
</script>

<style scoped>
</style>