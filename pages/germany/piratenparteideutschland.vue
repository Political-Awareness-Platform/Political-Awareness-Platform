<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/piraten.png" alt="piraten-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'piratenparteideutschland' },
      partyInfo: {
        name: 'Piraten Partei Deutschland',
        shortname: 'Piraten',
        established: '10/09/2006',
        founder: '',
        address: 'Pflugstrasse 9a 10115 Berlin',
        internet_address: 'https://www.piratenpartei.de/',
        public_relation: '',
        current_member: '7.770',
        president: 'Sebastian Alscher',
        facebook: 'https://www.facebook.com/Piratenpartei',
        twitter: 'https://twitter.com/Piratenpartei',
        phone: '030 / 2757-2040',
      },
      partyPurposes: [
        {
          description:
            'Als einzige Partei verlangen wir die gesetzliche Festschreibung der Netzneutralität – Datendurchleitung im Internet muss neutral bleiben.',
        },
        {
          description:
            'Wir geben eine konkrete Grundlage zur Berechnung eines gesetzlichen Mindestlohns, den wir allerdings nur als Brückentechnologie bis zur Einführung des ebenso geforderten Bedingungslosen Grundeinkommens sehen.',
        },
        {
          description:
            'Wir setzen uns für den Einsatz von frei zugänglichen und frei nutzbaren Bildungsressourcen (OER = Open Educational Resources) ein.',
        },
        {
          description:
            'Gerade aufgrund unseres Bekenntnisses zu Europa wollen wir eine transparente Ausgestaltung sowie die demokratische Kontrolle des ESM.',
        },
        {
          description:
            'Wir fordern die Einführung bundesweiter Volksentscheide. Wir wollen unseren politischen Willen nicht nur bei Wahlen sondern auch bei Abstimmungen ausdrücken.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>