<template>
  <footer>
    <p>
      We are unleashing the power of the technology and human ingenuity to
      achieve new victories in the fight against knotty democracy. Join us and
      have a global impact.
    </p>
  </footer>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
footer {
  padding: 10px;
  text-align: center;
  position: fixed;
  bottom: 0;
  p {
    height: auto;
    text-align: center;
    margin: auto;
    font-weight: 500;
  }

  @media only screen and (max-width: 425px) {
    position: relative;
    margin-top: 60px;
  }
}
</style>
