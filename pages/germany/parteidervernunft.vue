<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/pdv.png" alt="pdv-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'parteidervernunft' },
      partyInfo: {
        name: 'Partei der Vernunft',
        shortname: 'PDV',
        established: '30/05/2009',
        founder: '',
        address: 'Postfach 51 11 54 13371 Berlin',
        internet_address: 'https://parteidervernunft.de/',
        public_relation: '',
        current_member: '352',
        president: 'Friedrich Dominicus',
        facebook: 'https://www.facebook.com/Parteidervernunft/',
        twitter: 'https://twitter.com/PDV_Bund',
        phone: '49 (0) 152 5403 4785',
      },
      partyPurposes: [
        {
          description:
            'Äußere Freiheit wird durch die vom Staat übernommenen Aufgaben begrenzt. Für die Selbstverwirklichung des Individuums muss der Staat den unvorhersehbaren Zielen des Menschen Raum lassen und sich auf seine Kernaufgaben beschränken. Ein Mensch ist nur dann „politisch frei“ zu nennen, wenn er keiner Person, sondern nur wenigen, klaren Gesetzen eines freiheitlichen Rechtsstaates gehorchen muss. Jede Freiheit des Einzelnen wird durch die aufsummierte Macht der Anderen begrenzt. Ich kann meine Macht verleihen, muss es aber nicht.',
        },
        {
          description:
            'Innere Freiheit ist die Fähigkeit die Grenzen, die durch Sozialisierung unser eigen geworden sind, zu erkennen und nach Belieben zu überschreiten. Die Furcht vor der Freiheit ist die Furcht vor dem Ungewissen, der Unordnung, der Unsicherheit. Leider sind die meisten Menschen lieber unglücklich als Unsicherheit zu ertragen.',
        },
        {
          description:
            'Der Staat ist nicht dafür da, die Menschen vor sich selbst zu schützen, sondern vor Eingriffen in ihre Rechte durch Dritte. Die zwanghafte, staatliche Vergemeinschaftung von Risiken und Eigentum widerspricht dem Prinzip der Selbstverantwortung und schränkt die Freiheit des Einzelnen zugunsten einer Scheinsicherheit ein.',
        },
        {
          description:
            'Jeder braucht Mut, um in komplexen Situationen Entscheidungen zu treffen. Es ist stets ein Maß an Unsicherheit und Schwierigkeit mit Entscheidungen verbunden. Jeder erlebt seine Angst und bewertet sein Risiko individuell. Institutionen können diese Bewertung und Entscheidungen nicht durch Regeln vorwegnehmen ohne  die Freiheit des Einzelnen zu beschränken.',
        },
        {
          description:
            'In Abgrenzung zu den Begriffen Toleranz oder Akzeptanz ist mit Respekt nicht die Zustimmung zu bestimmten Ideen, Meinungen und Taten gemeint. Er ist viel mehr eine universelle Haltung seinen Mitmenschen gegenüber. Respekt ist die Bereitschaft anderen Menschen Aufmerksamkeit zu schenken und durch die eigene Handlung zu achten.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>