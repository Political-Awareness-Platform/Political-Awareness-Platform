<template>
  <div class="auth-panel">
    <input type="email" name="email" placeholder="Email" v-model="email" />
    <input type="password" name="password" placeholder="Password" v-model="password" />
    <div class="button-section">
      <button @click="SignIn"> {{ $t('AuthenticationComponent.SignIn') }} </button>
      <button @click="SignUp"> {{ $t('AuthenticationComponent.SignUp') }} </button>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      meta: [
        { hid: 'mobile', name:"viewport" , content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" }
      ]
    }
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    SignIn() {
      this.$store.dispatch('user/loginUser', { email: this.email, password: this.password });
      this.email = '',
      this.password = ''
    },

    SignUp() {
      this.$store.dispatch('user/createUser', { email: this.email, password: this.password });
      this.email = '',
      this.password = ''
    },
  },
}
</script>

<style lang="scss" scoped>
.auth-panel {
  margin: 2em auto;
  padding: 1em;
  border: 1px solid rgb(233, 233, 233);
  max-width: 320px;
  font-family: 'Quicksand';
  font-weight: 400;
  color: #2d333f;
  word-spacing: 2px;
  border-radius: 16px;

  input {
    width: 95%;
    font-family: 'Quicksand';
    border: none;
    background: none;
    font-size: 16px;
    color: #555;
    padding: 16px 10px 16px 10px;
    border: 1px solid #dedede;
    margin-bottom: 10px;
    border-radius: 12px;
    box-shadow: 6px 6px 50px #dedede, -6px -6px 50px #ffffff;

    
  }

  input:focus {
    box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #ffffff;
    border: none;
    outline: none;
  }

  .button-section {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    button {
      border-radius: 4px;
      border: 1px solid #3b8070;
      color: #3b8070;
      text-decoration: none;
      padding: 10px 30px;
      font-family: 'Quicksand';
      font-size: 0.8em;
      background-color: #fff;
    }

    button:hover {
      color: #fff;
      background-color: #3b8070;
    }
  }
}

@media screen and (device-aspect-ratio: 9/16) {
       input[type=”email”] {font-size:100%;}
    }
</style>
