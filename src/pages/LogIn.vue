<template>
  <div class="login-page-wrapper container w-100">
    <div class="row justify-content-center my-5">
      <div class="logo text-center">
        <h2>Hello! Kitty</h2>
      </div>
      <form @submit.prevent="loginSubmited" class="login-form col-8 my-5">
        <div class="form-group mb-3">
          <label for="account">帳號</label>
          <input v-model="account" type="text" class="form-control" id="account" aria-describedby="emailHelp" required>
        </div>
        <div class="form-group mb-3">
          <label for="password">密碼</label>
          <input v-model="password" type="password" class="form-control" id="password" required>
        </div>
        <button type="submit" class="btn btn-outline-primary">登入</button>
      </form>
    </div>
  </div>
</template>

<script>
const dummyKey = '430e08ac-f8ba-429b-be6e-28202c71b252'

export default {
  name: 'login',
  data() {
    return {
      account: '',
      password: '',
      loginInputChecked: false
    }
  },
  methods: {
    loginSubmited() {
      this.checkLoginInput()
      if (!this.loginInputChecked) {
        return
      }
      alert('歡迎登入')
      this.setSessionKey()
      this.$router.push('/home')
    },
    checkLoginInput() {
      if (!this.account) {
        alert('請輸入帳號')
        return
      }
      if (!this.password) {
        alert('請輸入密碼')
        return
      }
      console.log('login is checked')
      this.loginInputChecked = true
    },
    setSessionKey() {
      sessionStorage.setItem('key', dummyKey)
    }
  }
}
</script>

<style scoped>
</style>