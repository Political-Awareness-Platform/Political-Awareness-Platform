<template>
  <footer>
    <div v-show="this.$store.state.user.userUID">
      <button @click="SignOut">Sign Out</button>
    </div>
    <div>
      <LanguageInput />
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      party: null,
      logo: false,
    };
  },
  methods: {
    SignOut() {
      this.$store.dispatch("user/UserSignedOut");
    },
  },
};
</script>

<style lang="scss">
footer {

  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    display: grid;
    justify-items: center;
    grid-template-columns: auto;
  }

  button {
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
    margin: 8px;
    font-family: "Quicksand";
    font-size: 0.8em;
    background-color: #fff;
  }

  button:hover {
    color: #fff;
    background-color: #3b8070;
  }
}
</style>