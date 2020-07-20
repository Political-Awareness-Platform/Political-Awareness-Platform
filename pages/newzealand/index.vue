<template>
  <div class="country-page">
    <div class="country-intro">
      <div class="country-flag">
        <img src="~assets/flags/nz.svg" alt="newzealand-flag" />
      </div>
      <div class="country-info">
        <p><b>Active Parties :</b> 15</p>
        <p><b>Parties in Parliament :</b> 5</p>
        <p><b>Number of Voters :</b> 3.570.000</p>
        <p><b>Contribution to election :</b> 79.8</p>
      </div>
    </div>
    <h2 style="text-align: center; margin: 2em 0px;">Parties</h2>
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
    <h2 style="text-align: center; margin: 2em 0px;">Ideal / Imaginary Party</h2>
    <Authentication v-show="!this.$store.state.user.userUID" />
    <div class="country-ideal-party" v-if="this.$store.state.user.userUID">
      <div class="positive-section">
        <CountryPagePositiveCommentSection :partyDetails="partyDetails" />
      </div>
      <div class="negative-section">
        <CountryPageNegativeCommentSection :partyDetails="partyDetails" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partyDetails: { country: 'newzealand', dbcode: 'imaginary' },
      parties: [
        { party_name: 'National Party', link: '/newzealand/nationalparty' },
        { party_name: 'Labour Party', link: '/newzealand/labourparty' },
        { party_name: 'NZ First', link: '/newzealand/nzfirst' },
        { party_name: 'Green Party', link: '/newzealand/greenparty' },
        { party_name: 'ACT', link: '/newzealand/act' },
        { party_name: 'Aotearoa Legalise Cannabis Party', link: '/newzealand/aotearoalegalisecannabisparty' },
        { party_name: 'Mana Party', link: '/newzealand/manaparty' },
        { party_name: 'Māori Party', link: '/newzealand/maoriparty' },
        { party_name: 'New Conservative', link: '/newzealand/newconservative' },
        { party_name: 'ONE Party', link: '/newzealand/oneparty' },
        { party_name: 'New Zealand Outdoors Party', link: '/newzealand/newzealandoutdoorsparty' },
        { party_name: 'Social Credit Party', link: '/newzealand/socialcreditparty' },
        { party_name: 'The Opportunities Party', link: '/newzealand/theopportunitiesparty' },
        { party_name: 'Sustainable New Zealand Party', link: '/newzealand/sustainablenewzealandparty' },
        { party_name: 'Vision NZ', link: '/newzealand/visionnz' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
