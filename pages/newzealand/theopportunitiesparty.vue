<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/newzealand/topnz.jpg" alt="topnz-logo" />
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
      partyDetails: { country: 'newzealand', dbcode: 'theopportunitiesparty' },
      partyInfo: {
        name: 'The Opportunities Party',
        shortname: 'TOP',
        established: '6 March 2017',
        founder: '',
        address: 'The Opportunities Party 90 Crawford St Dunedin 9016',
        internet_address: 'www.top.org.nz',
        public_relation: 'Ray McKeown',
        current_member: '',
        president: 'Geoff Simmons',
        facebook: 'https://www.facebook.com/topnz/',
        twitter: 'https://twitter.com/top_nz/',
        phone: '021 678499',
      },
      partyPurposes: [
        {
          description:
            '',
        },
        {
          description:
            '',
        },
        {
          description:
            '',
        },
        {
          description:
            '',
        },
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
