<template>
  <div class="party-purpose">
      <h3 style="text-align:center; font-family:Quicksand;">{{purposeText}}</h3>
      <p v-for="purpose in partyPurposeList" :key=purpose.index> {{purpose.description}}</p>
  </div>
</template>

<script>
export default {
    props: {
        partyPurposeList: {
            type: Array,
            required: true
        },
        purposeText: {
            type: String, required: true
        }
    },
}
</script>

<style lang="scss" scoped>
.party-purpose {
    p {
        line-height: 1.5em;
        margin: 1em;
        font-family: "Quicksand";
    }
}
</style>