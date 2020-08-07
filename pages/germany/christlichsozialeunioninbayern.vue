<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/csu.png" alt="csu-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'christlichsozialeunioninbayern' },
      partyInfo: {
        name: 'Christlich-Soziale Union in Bayern',
        shortname: 'CSU',
        established: '13/10/1945',
        founder: '',
        address: 'Mies-van-der-Rohe-Strasse 1 80807 Munich',
        internet_address: 'https://www.csu.de/',
        public_relation: '',
        current_member: '140,876',
        president: 'Markus Söder',
        facebook: 'https://www.facebook.com/CSU',
        twitter: 'https://twitter.com/CSU',
        phone: '(0)89/12 43-299',
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