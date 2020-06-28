<template>
  <div class="window">
    <nav>
    <nuxt-link to="/" class="home-page-link">Political Awareness Platform</nuxt-link>
    </nav>
    <div class="content">
      <Nuxt />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.window {
  nav {
    display: flex;
    justify-content: center;
    align-items: center;

    .home-page-link {
    font-family: 'Quicksand';
    letter-spacing: 1px;
    font-weight: 700;
    font-size: 2em;
    color: #526488;
    word-spacing: 5px;
    text-decoration: none;

    @media only screen and (max-width: 600px) {
      font-size: 1.3em;
      word-spacing: 2px;
      letter-spacing: 0px;
      font-weight: 700;
    }
  }
  }
  
  .content {
    margin: 0;
    padding: 0;
  }
}
</style>
