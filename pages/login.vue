<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="loginUser">
        <input type="email" v-model="email" />
        <input type="password" v-model="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: 'test@test.com',
      password: 'test1234'
    }
  },
  methods: {
    loginUser() {
      this.$store.dispatch('loginUser', {
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>
