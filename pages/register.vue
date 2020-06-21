<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="registerUser">
        <input type="email" placeholder="email" v-model="email" />
        <input type="password" placeholder="password" v-model="password" />
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    registerUser() {
      this.$store.dispatch("createUser", {
        email: this.email,
        password: this.password
      })
        .then(() => {

          this.$router.push('/');
        });
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
input {
  width: 100%;
  margin: 5px 0;
  padding: 5px;
}

button{
  margin-top: 5px;
}
</style>
