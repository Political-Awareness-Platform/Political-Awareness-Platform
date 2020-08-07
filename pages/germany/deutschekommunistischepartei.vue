<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/dkp.png" alt="dkp-logo" />
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
      partyDetails: {
        country: 'germany',
        dbcode: 'deutschekommunistischepartei',
      },
      partyInfo: {
        name: 'Deutsche Kommunistische Partei',
        shortname: 'DKP',
        established: '09/1968',
        founder: '',
        address: 'Böblingerstr. 105 70199 Stuttgart',
        internet_address: 'https://dkp.de/',
        public_relation: '',
        current_member: '3500',
        president: 'Patrik Köbele',
        facebook: 'https://www.facebook.com/dkppv/',
        twitter: 'https://twitter.com/partei_dkp',
        phone: '0711-6599900',
      },
      partyPurposes: [
        {
          description:
            'die die Interessen der großen Mehrheit der Menschen in diesem Land – vor allem der Arbeiterklasse und der anderen Werktätigen, der Erwerbslosen und Hartz-IV-Empfänger – gegen die Macht und das Profitstreben des Großkapitals zur Geltung bringt;',
        },
        {
          description:
            'die auf die Arbeiterklasse als entscheidende gesellschaftsverändernde Kraft sowie die Entfaltung ihres Klassenkampfes und die Entwicklung des Klassenbewusstseins orientiert;',
        },
        {
          description:
            'die dafür wirkt, die verschiedenen Kräfte des Widerstandes im Kampf gegen die neoliberale Politik zu stärken und zusammen zu führen;',
        },
        {
          description:
            'die ihr wissenschaftliches Fundament in der Theorie von Marx, Engels und Lenin hat und diese für die heutigen Kampfbedingungen weiterentwickelt;',
        },
        {
          description:
            'die den grundlegenden Bruch mit den kapitalistischen Eigentums- und Machtverhältnissen und den Sozialismus anstrebt.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>