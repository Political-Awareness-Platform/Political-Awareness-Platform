<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/volksabstimmunglogo.jpg" alt="Volksabstimmung-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'abjetztdemokratiedurchvolksabstimmung' },
      partyInfo: {
        name: 'Ab jetzt … Demokratie durch Volksabstimmung',
        shortname: 'Volksabstimmung',
        established: '1997',
        founder: '',
        address: 'Gneisenaustrasse 52c 53721 Siegburg NRW',
        internet_address: 'https://blog.demokratie-durch-volksabstimmung.de/index.php/de/',
        public_relation: 'Angelika Geerlings',
        current_member: '1,000',
        president: 'Helmut Fleck',
        facebook: '',
        twitter: '',
        phone: '',
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