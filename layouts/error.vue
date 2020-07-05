<template>
  <div class="error-page">
      <h1>Opps!! An error occured</h1> <br>
      <h2>Please go back to <nuxt-link to="/" style="text-decoration: none;">Home Page</nuxt-link> </h2>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.error-page {  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
}
</style>