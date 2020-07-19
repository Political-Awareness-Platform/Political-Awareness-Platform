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
// @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
// General Settings
html {
  font-family: 'QuickSand', Arial, sans-serif;
  background-color: #ffffff;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scrollbar-width: none;
}

* {
  box-sizing: border-box;
  margin: 0;
}

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
      margin-top: 10px;
      background: linear-gradient(
        to right,
        hsl(204 100% 50%),
        hsl(98 100% 35%)
      );
      background-clip: text;
      -webkit-text-fill-color: transparent;

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
    padding: 0 1em;
  }
}
</style>
