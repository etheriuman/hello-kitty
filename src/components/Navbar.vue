<template>
  <div class="navbar-wrapper">
    <div class="logo col-6">
      <img src="" alt="">
    </div>
    <ul class="nav-items">
      <li class="nav-item">
        <router-link to="/cats">
          <button class="btn btn-sm btn-outline-primary text-nowrap">全部喵喵</button>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/cats/upload">
          <button class="btn btn-sm btn-outline-primary text-nowrap">上傳喵喵</button>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/cats/self">
          <button class="btn btn-sm btn-outline-primary text-nowrap">我的喵喵</button>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/cats/likes">
          <button class="btn btn-sm btn-outline-primary text-nowrap">喵喵收藏</button>
        </router-link>
      </li>
    </ul>
    <div class="logout">
      <button @click.prevent.stop="logout" class="btn btn-sm btn-danger text-nowrap">登出</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  methods: {
    logout() {
      // clean local key
      localStorage.removeItem('key')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.navbar-wrapper {
  width: 100%;
  height: 50px;
  background: #e3e3e3;
  display: grid;
  grid-template-columns: 1fr auto 100px;
}

.nav-items {
  padding: .5rem 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.nav-item {
  margin-right: .5rem;
}

.logout {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>