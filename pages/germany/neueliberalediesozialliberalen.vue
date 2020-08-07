<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/neueliberale.png" alt="Neue Liberale-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'neueliberalediesozialliberalen' },
      partyInfo: {
        name: 'Neue Liberale die Sozialliberalen',
        shortname: 'Neue Liberale',
        established: '14/09/2014',
        founder: '',
        address: 'Oldenburger Str. 6 10551 Berlin',
        internet_address: 'https://neueliberale.eu/',
        public_relation: 'Emine Tunc',
        current_member: '275',
        president: 'Dieter Schulz',
        facebook: 'https://www.facebook.com/parteineueliberale',
        twitter: 'https://twitter.com/neue_liberale',
        phone: '',
      },
      partyPurposes: [
        {
          description:
            'Der Bürger der Zukunft lebt in einer sauberen Umwelt, ist selbstbestimmt und selbstverantwortlich, fühlt sich dem Gemeinwohl verpflichtet und bringt sich in die Gesellschaft ein, er wird durch unabhängige Medien glaubwürdig informiert und muss ein Scheitern nicht fürchten.',
        }
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>