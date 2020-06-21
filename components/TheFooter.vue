<template>
  <footer>
    <p>
      We are unleashing the power of the technology and human ingenuity to
      achieve new victories in the fight against knotty democracy. Join us and
      have a global impact.
    </p>
    <br /><br />
    <div class="user" v-show="this.$store.state.userUID === null">
      <nuxt-link to="/login">Login 🚪 </nuxt-link>
    </div>
    <div class="user" v-show="this.$store.state.userUID">
      🟢
    </div>
  </footer>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
footer {
  padding: 10px;
  margin: auto;
  position: fixed;
  bottom: 0;
  margin-top: 50vh;

  @media only screen and (max-width: 425px) {
    position: relative;
    margin-top: 60px;
  }
  p {
    height: auto;
    text-align: center;
    margin: auto;
    font-weight: 500;
  }

  .user {
    text-align: center;
    a {
      text-decoration: none;
    }
  }
}
</style>
