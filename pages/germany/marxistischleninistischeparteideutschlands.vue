<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/mlpd.png" alt="mlpd-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'marxistischleninistischeparteideutschlands' },
      partyInfo: {
        name: 'Marxistisch Leninistische Partei Deutschlands',
        shortname: 'MLPD',
        established: '1982',
        founder: 'Willi Dickhut',
        address: 'Schmalhorststraße 1c 45899 Gelsenkirchen',
        internet_address: 'https://www.mlpd.de/',
        public_relation: '',
        current_member: '2,800 ',
        president: 'Gabi Gärtner ',
        facebook: 'https://www.facebook.com/mlpd.de/',
        twitter: 'https://twitter.com/mlpdde',
        phone: '0209 951940',
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