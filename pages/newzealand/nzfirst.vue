<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/newzealand/nzfirst.jpg" alt="nzfirst-logo" />
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
      partyDetails: { country: 'newzealand', dbcode: 'nzfirst' },
      partyInfo: {
        name: 'New Zealand First Party',
        shortname: 'NZ First',
        established: '20 December 1994',
        founder: '',
        address: '251E Rawhiti Rd RD4 Northland 0184',
        internet_address: 'www.nzfirst.org.nz',
        public_relation: 'Liz Witehira',
        current_member: '',
        president: 'Rt Hon Winston Peters',
        facebook: 'https://www.facebook.com/NZFirst',
        twitter: 'https://twitter.com/NZFirstNews',
        phone: '027 205 8899',
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
