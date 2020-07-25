<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/newzealand/nznationalparty.jpg" alt="nationalparty-logo" />
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
      partyDetails: { country: 'newzealand', dbcode: 'nationalparty' },
      partyInfo: {
        name: 'The New Zealand National Party',
        shortname: 'National Party',
        established: '2 December 1994',
        founder: '',
        address: 'The New Zealand National Party PO Box 1155 Wellington 6140',
        internet_address: 'www.national.org.nz',
        public_relation: 'Greg Hamilton',
        current_member: '',
        president: 'HON JUDITH COLLINS',
        facebook: 'https://www.facebook.com/NZNATS',
        twitter: 'https://twitter.com/NZNationalParty',
        phone: '(04) 894 7016',
      },
      partyPurposes: [
        {
          description:
            'The National Party seeks a safe, prosperous and successful New Zealand that creates opportunities for all New Zealanders to reach their personal goals and dreams. ',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
