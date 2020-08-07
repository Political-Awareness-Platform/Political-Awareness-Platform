<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/dierechte.jpg" alt="dietechte-logo" />
      </div>
      <PartyDetails :partyInfo="partyInfo" :partyDetails="partyDetails" />
    </div>
    <PartyPurpose :partyPurposeList="partyPurposes" purposeText="Zweck der Partei" />
    <Authentication v-show="!this.$store.state.user.userUID" />
    <div class="party-comment-section" v-if="this.$store.state.user.userUID">
     <div class="positive-section">
        <PartyPagePositiveCommentSection :partyDetails="partyDetails" />
      </div>
      <div class="negative-section">
        <PartyPageNegativeCommentSection :partyDetails="partyDetails" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partyDetails: { country: 'germany', dbcode: 'dierechte' },
      partyInfo: {
        name: 'Die Rechte',
        shortname: 'Die Rechte',
        established: '27/05/2012',
        founder: 'Christian Worch',
        address: 'Thusneldastr. 3 - 44149 Dortmund',
        internet_address: 'https://die-rechte.net/',
        public_relation: '',
        current_member: '',
        president: 'Sascha Krolzig',
        facebook: '',
        twitter: 'https://twitter.com/dierechtebund',
        phone: '0231-315 996 10',
      },
      partyPurposes: [
        {
          description:
            '',
        }
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>