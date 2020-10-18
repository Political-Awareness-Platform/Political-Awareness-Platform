<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/sdp.png" alt="sdp-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'sozialdemokratischeparteideutschlands' },
      partyInfo: {
        name: 'Sozialdemokratische Partei Deutschlands',
        shortname: 'SPD',
        established: '23 May 1863',
        founder: '?',
        address: 'Wilhelmstrasse 141 10963 Berlin',
        internet_address: 'https://www.spd.de/',
        public_relation: '?',
        current_member: '419,300',
        president: 'Saskia Esken and Norbert Walter-Borjans',
        facebook: 'https://www.facebook.com/SPD',
        twitter: 'https://twitter.com/spdde',
        phone: '(030) 25991-500',
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
