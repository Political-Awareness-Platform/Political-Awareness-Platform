<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/familien.png" alt="familien-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'familienparteideutschlands' },
      partyInfo: {
        name: 'Familien-Partei Deutschlands',
        shortname: 'Familie',
        established: '17/10/1981',
        founder: '',
        address: 'Mühlenweg 12, 23738 Lensahn',
        internet_address: 'https://www.xn--whlefamilie-l8a.de/',
        public_relation: '',
        current_member: '586',
        president: 'Helmut Geuking',
        facebook: 'https://www.facebook.com/FamilienParteiDeutschlands/',
        twitter: '',
        phone: '04363/9037994 ',
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