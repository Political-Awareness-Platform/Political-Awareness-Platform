<template>
  <div class="country-page">
    <div class="country-intro">
      <div class="country-flag">
        <img src="~assets/flags/nz.svg" alt="bulgaria-flag" />
      </div>
      <div class="country-info">
        <p><b>Active Parties :</b> </p>
        <p><b>Parties in Parliament :</b> </p>
        <p><b>Number of Voters :</b> </p>
        <p><b>Contribution to election :</b> </p>
      </div>
    </div>
    <h2 style="text-align: center; margin: 2em 0px; font-family:Quicksand;">Parties</h2>
    <div class="country-parties">
      <div
        v-for="party in parties"
        :key="party.party_name"
        class="country-party-card"
      >
        <nuxt-link :to="party.link">
          {{ party.party_name }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partyDetails: { country: 'bulgaria', dbcode: 'imaginary' },
      parties: [
        { party_name: 'GERB ', link: '/bulgaria/gerb },
     
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
