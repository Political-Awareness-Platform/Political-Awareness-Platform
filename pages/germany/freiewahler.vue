<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/freiewahler.png" alt="freiewahler-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'freiewahler' },
      partyInfo: {
        name: 'Freie Wähler',
        shortname: 'Freie Wähler',
        established: '24/01/2009',
        founder: '',
        address: 'Mühlenstraße 13 27777 Ganderkesee',
        internet_address: 'https://www.freiewaehler.eu/',
        public_relation: '',
        current_member: '4,648',
        president: 'Hubert Aiwanger',
        facebook: 'https://www.facebook.com/freie.waehler.bundesvereinigung/',
        twitter: 'https://twitter.com/FREIEWAEHLER_BV',
        phone: '(0) 4222 - 209 492 5',
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