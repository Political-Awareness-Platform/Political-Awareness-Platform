<template>
  <div class="country-page">
    <div class="country-intro">
      <div class="country-flag">
        <img src="~assets/flags/tr.svg" alt="turkey-flag" />
      </div>
      <div class="country-info">
        <p><b>Faliyette olan parti sayisi :</b> 83</p>
        <p><b>Meclisteki parti sayisi :</b> 11</p>
        <p><b>Secmen sayisi :</b> 57.058.636</p>
        <p><b>Secime katilim yuzdesi :</b> 84,67</p>
      </div>
    </div>
    <h2 style="text-align: center; margin: 2em 0px;">Partiler</h2>
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
    <h2 style="text-align: center; margin: 2em 0px;">Ideal / Hayali Parti</h2>
    <Authentication v-show="!this.$store.state.user.userUID" />
    <div class="country-ideal-party"  v-if="this.$store.state.user.userUID">
      <div class="positive-section">
        <ThePositiveCommentList
          headerTitle="Yapilmasi Istenenler"
          TopHeaderTitle="En cok istenen"
          :partyDetails="partyDetails"
        />
      </div>
      <div class="negative-section">
        <TheNegativeCommentList
          headerTitle="Istenmeyenler"
          TopHeaderTitle="En uzak durulmasi gereken"
          :partyDetails="partyDetails"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partyDetails: { country: 'turkey', dbcode: 'imaginary' },
      parties: [
        {
          party_name: 'Milliyetci Hareket Parti',
          link: '/turkey/milliyetcihareketparti',
        },
        {
          party_name: 'AK Parti',
          link: '/turkey/adaletvekalkinmapartisi',
        },
        {
          party_name: 'Deva Parti',
          link: '/turkey/devaparti',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
