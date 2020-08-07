<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/violetten.jpg" alt="violetten-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'dievioletten' },
      partyInfo: {
        name: 'Die Violetten',
        shortname: 'Die Violetten',
        established: '06/01/2001',
        founder: '',
        address: 'Ursulastraße 7 46049 Oberhausen',
        internet_address: 'https://die-violetten.de/',
        public_relation: 'Irene Garcia Garcia',
        current_member: '',
        president: 'Rainer Schäfer',
        facebook: 'https://www.facebook.com/dievioletten',
        twitter: 'https://twitter.com/dievioletten',
        phone: '0208 - 842425',
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