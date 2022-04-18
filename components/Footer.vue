<template>
  <footer>
    <div class="footer">
      <div v-show="this.$store.state.user.userUID">
        <button @click="SignOut">Sign Out</button>
      </div>
      <div>
        <LanguageInput />
      </div>
    </div>
    <div class="footer-info">
      <div>
        <a
          href="https://github.com/Political-Awareness-Platform/Political-Awareness-Platform"
          rel="noopener nofollow noreferrer"
          target="_blank"
          aria-label="See our works on GitHub!"
          title="See our works on GitHub!"
        >
          Source code on GitHub
        </a>
      </div>
      <div>
        <a
          href="https://opencollective.com/political-awareness-platform"
          rel="noopener nofollow noreferrer"
          target="_blank"
          aria-label="Donation for the project"
          title="Donation for the project"
        >
          Donation
        </a>
      </div>
      <div>
        <a
          href="mailto:politicalawarenessplatform@gmail.com"
          title="politicalawarenessplatform@gmail.com"
          aria-label="send an email to the project"
        >
          Contact via email</a
        >
      </div>
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
.footer {
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

.footer-info {
  margin-bottom: 24px;
  padding: 24px 0px;
  display: flex;
  justify-content: space-around;
  margin-inline: auto;
  max-width: 1000px;

  a {
    color: #0077b5;
    text-decoration: none;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;

    div {
      margin-bottom: 10px;
    }
  }
}
</style>
