<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/dsu.png" alt="dsu-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'deutschesozialeunion' },
      partyInfo: {
        name: 'Deutsche Soziale Union',
        shortname: 'DSU',
        established: '20/01/1990',
        founder: '',
        address: 'Dorfstraße 43 08233 Treuen',
        internet_address: 'https://www.dsu-deutschland.de/',
        public_relation: '',
        current_member: '1060',
        president: 'Roberto Rink',
        facebook: 'https://www.facebook.com/DSU.Sachsen/',
        twitter: '',
        phone: '03741/413 869',
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