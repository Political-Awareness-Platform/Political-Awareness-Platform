<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <!-- <img src="~assets/logos/germany/.png" alt="-logo" /> -->
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
      partyDetails: { country: 'germany', dbcode: 'achtsamedemokraten' },
      partyInfo: {
        name: 'Achtsame Demokraten',
        shortname: 'Die Achtsamen',
        established: '2013',
        founder: '',
        address: 'Süderende 113 18565 Hiddensee OT Vitte',
        internet_address: 'http://achtsamkeit-2013.de/',
        public_relation: 'Mr. Jörg Mehrwald',
        current_member: '',
        president: 'Ulrike Wachsmuth',
        facebook: '',
        twitter: '',
        phone: '0171 3187897',
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