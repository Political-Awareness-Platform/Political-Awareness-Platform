<template>
  <div class="country-page">
    <div class="country-intro">
      <div class="country-flag">
        <img src="~assets/flags/de.svg" alt="Germany-flag" />
      </div>
      <div class="country-info">
        <p><b>Aktive politische Parteien :</b> 51</p>
        <p><b>Politische Parteien im Parlament :</b> 14</p>
        <p><b>Anzahl der Wähler :</b> 61,675,529</p>
        <p><b>Teilnahme an der letzten Wahl :</b> 84.11%</p>
      </div>
    </div>
    <h2 style="text-align: center; margin: 2em 0px;">Politische Parteien</h2>
    <div class="country-parties">
      <div
        v-for="party in parties"
        :key="party.party_name"
        class="country-party-card"
      >
        <nuxt-link :to="party.link">
          <b>{{ party.party_name }}</b>
        </nuxt-link>
      </div>
    </div>
    <h2 style="text-align: center; margin: 2em 0px;">
      Ideale / imaginäre politische Partei
    </h2>
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
      partyDetails: { country: 'germany', dbcode: 'imaginary' },
      parties: [
        {
          party_name: 'Christlich Demokratische Union Deutschlands',
          link: '/germany/christlichdemokratischeuniondeutschlands',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
