<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/cdu.png" alt="cdu-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'christlichdemokratischeuniondeutschlands' },
      partyInfo: {
        name: 'Christlich Demokratische Union Deutschlands',
        shortname: 'CDU',
        established: 'June 26, 1945',
        founder: '?',
        address: 'Klingelhöferstraße 8 10785 Berlin',
        internet_address: 'https://www.cdu.de/',
        public_relation: '?',
        current_member: '407.350',
        president: 'Annegret Kramp-Karrenbauer',
        facebook: 'https://www.facebook.com/CDU',
        twitter: 'https://twitter.com/cdu',
        phone: '030 - 220 70 - 0',
      },
      partyPurposes: [
        {
          description:
            'Grundlage unserer Politik ist das christliche Verständnis vom Menschen und seiner Verantwortung vor Gott. Unsere Grundwerte Freiheit, Solidarität und Gerechtigkeit sind daraus abgeleitet. Die CDU ist für jeden offen, der die Würde und Freiheit aller Menschen und die daraus abgeleiteten Grundüberzeugungen unserer Politik bejaht.',
        }
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
