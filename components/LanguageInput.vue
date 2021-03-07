<template>
  <div class="lang-dropdown">
    <select v-model="$i18n.locale">
      <option v-for="lang in $i18n.locales" :key="lang.code" :value="lang.code"> {{ lang.name }}</option>
    </select>
  </div>
</template>
<script>
export default {}
</script>

<style lang="scss" scoped>
.lang-dropdown {

  margin: 8px;

  select {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    font-family: "Quicksand";
  }
}
</style>