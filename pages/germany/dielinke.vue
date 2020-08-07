<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/dielinke.png" alt="dielinke-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'dielinke' },
      partyInfo: {
        name: 'Die Linke',
        shortname: 'Die Linke',
        established: '16/06/2007',
        founder: '',
        address: 'Kleine Alexanderstraße 28 10178 Berlin',
        internet_address: 'https://www.die-linke.de/start/',
        public_relation: '',
        current_member: '60,862',
        president: 'Katja Kipping',
        facebook: 'https://www.facebook.com/linkspartei/',
        twitter: 'https://twitter.com/dielinke/',
        phone: '(030) 24 009 999',
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