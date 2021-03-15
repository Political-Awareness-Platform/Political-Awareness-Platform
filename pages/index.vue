<template>
  <div class="container">
  
    <p class="platform-purpose"> {{ $t('HomePage.PlatformGoal') }} </p>
    <br />

    <h3>Goal I</h3>
    <p class="goal-text"> {{ $t('HomePage.Goal1') }}</p>
    <br />
    <h3>Goal II</h3>
    <p class="goal-text"> {{ $t('HomePage.Goal2') }} </p>
    <br />
    <h3>Goal III</h3>
    <p class="goal-text"> {{ $t('HomePage.Goal3') }} </p>

    <h4 class="subtitle"> {{ $t('HomePage.AvailableCountries') }} </h4>

    <div class="links">
      <nuxt-link :to="localePath('/newzealand')" class="button--green">New Zealand</nuxt-link>
      <nuxt-link :to="localePath('/turkey')" class="button--green">Türkiye</nuxt-link>
      <nuxt-link :to="localePath('/germany')" class="button--green">Deutschland</nuxt-link>
      <nuxt-link :to="localePath('/bulgaria')" class="button--green">Bulgaria</nuxt-link>
    </div>

    <Authentication v-show="!this.$store.state.user.userUID" />
    
    <p style="margin-top: 5em; font-family: Quicksand"> {{ $t('HomePage.TheMessage') }} </p>

  </div>
</template>

<script>
// import { fireAuth } from "@/plugins/firebaseConfig.js";
export default {
  data() {
    return {};
  },
  mounted() {
    // window.location.hostname === "localhost" ? this.$store.dispatch("user/anonymousUser") : "";
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin: auto;
  // min-height: 100vh;
  text-align: center;
  max-width: 1000px;
}

.platform-purpose {
  max-width: 900px;
  text-align: center;
  margin: 2em auto;
  font-family: "Quicksand";
  font-size: 1em;
  font-weight: 500;
  color: #2d333f;
  word-spacing: 2px;

  @media only screen and (max-width: 600px) {
    text-align: left;
    font-size: 15px;
  }
}

.subtitle {
  font-weight: 400;
  font-size: 2em;
  color: #526488;
  word-spacing: 5px;
  margin: 1em 0;
  font-family: "Quicksand";
}

.links {
  font-family: "Quicksand";
  display: flexbox;
  flex-direction: row wrap;
}

.goal-text {
  text-align: left;
  color: #1d2129;
  word-spacing: 2px;
  font-size: 1em;
  font-family: "Quicksand";
  font-weight: 400;
  color: #2d333f;
  word-spacing: 2px;
  margin: 0;

  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }
}

h3 {
  text-align: left;
  margin: 0px;
  color: #526488;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
  margin-top: 1em;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
