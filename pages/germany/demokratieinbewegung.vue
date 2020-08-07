<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/diblogo.jpeg" alt="dib-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'demokratieinbewegung' },
      partyInfo: {
        name: 'Demokratie in Bewegung',
        shortname: 'DiB',
        established: '29/04/2017',
        founder: '',
        address: 'Lola-Fischel-Strasse 18, 30173 Hanover',
        internet_address: 'https://bewegung.jetzt/',
        public_relation: '',
        current_member: '410',
        president: 'Franka Kretschmer , Guido Drehsen',
        facebook: 'https://www.facebook.com/demokratiebewegen/',
        twitter: 'https://twitter.com/brauchtbewegung',
        phone: '',
      },
      partyPurposes: [
        {
          description: 'Demokratie, Mitbestimmung, Transparenz',
        },
        {
          description:
            'Gerechtigkeit in sozialen, politischen, wirtschaftlichen und ökologischen Fragen',
        },
        {
          description: 'Weltoffenheit und Vielfalt',
        },
        {
          description: 'Zukunftsorientierung und Nachhaltigkeit',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>