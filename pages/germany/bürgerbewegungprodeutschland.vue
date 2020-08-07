<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/bürgerbewegun.png" alt="bürgerbewegun-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'bürgerbewegungprodeutschland' },
      partyInfo: {
        name: 'Bürgerbewegung pro Deutschland',
        shortname: 'pro Deutschland',
        established: '20/01/2017',
        founder: '',
        address: 'Allee der Kosmonauten 26, 12681 Berlin',
        internet_address: 'https://www.pro-deutschland.de/',
        public_relation: 'Detlev Schwarz',
        current_member: '1.122',
        president: 'Manfred Rouhs',
        facebook: 'https://www.facebook.com/NRWproDeutschland/',
        twitter: '',
        phone: '',
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