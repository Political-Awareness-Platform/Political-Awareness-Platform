<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/newzealand/cannabisparty.jpg" alt="cannabisparty-logo" />
      </div>
      <PartyDetails :partyInfo="partyInfo" :partyDetails="partyDetails" />
    </div>
    <PartyPurpose :partyPurposeList="partyPurposes" purposeText="Party Purposes" />
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
      partyDetails: { country: 'newzealand', dbcode: 'aotearoalegalisecannabisparty' },
      partyInfo: {
        name: 'Aotearoa Legalise Cannabis Party',
        shortname: 'The Cannabis Party',
        established: '30 May 1996',
        founder: '',
        address: '25 Hanmer Street Christchurch 8141',
        internet_address: 'www.alcp.org.nz',
        public_relation: 'Irinka Britnell',
        current_member: '',
        president: '',
        facebook: '',
        twitter: '',
        phone: '022 082 4399',
      },
      partyPurposes: [
        {
          description:
            '',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
