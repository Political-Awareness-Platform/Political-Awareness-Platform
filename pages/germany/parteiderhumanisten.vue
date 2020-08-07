<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/humanisten.png" alt="humanisten-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'parteiderhumanisten' },
      partyInfo: {
        name: 'Partei der Humanisten',
        shortname: 'Die Humanisten',
        established: '04/10/2014',
        founder: '',
        address: 'Beilsteiner Straße 21, 12681 Berlin',
        internet_address: 'https://www.diehumanisten.de/',
        public_relation: 'Dominic Ressel',
        current_member: '1.428',
        president: 'Jan Steinhauser',
        facebook: 'https://www.facebook.com/parteiderhumanisten/',
        twitter: 'https://twitter.com/diehumanisten',
        phone: '+49 30 69 51 98 55',
      },
      partyPurposes: [
        {
          description:
            'Im Mittelpunkt des Denkens und Handelns steht der Mensch selbst, seine Freiheit, sein Wohl, sein Glück und seine Entwicklung. Von ihm gehen Erkenntnis, Vernunft und Ethik aus. Er handelt, um positiv auf sich und auf Mitmenschen zu wirken. Kein Dogma und keine Ideologie ist dem menschlichen Wohlergehen oder den naturwissenschaftlichen Erkenntnissen übergeordnet. Deshalb sind die Selbstbestimmung des Menschen und die Menschenrechte auch für den Humanismus von zentraler Bedeutung und essentielle Bestandteile von Menschenrechtskonventionen und demokratischen Verfassungen weltweit.',
        },
        {
          description:
            'Wir sind evolutionäre Humanisten. Wir gehen davon aus, dass die Vorgänge im Universum Naturgesetzen folgen. Wir sind davon überzeugt, dass der Mensch durch wissenschaftliche Methoden die Welt erkennen und verstehen kann. Wir sind durch natürliche Abläufe entstanden und sind Teil der Natur. Als hochentwickelte Lebewesen haben wir verschiedene natürliche Bedürfnisse, Emotionen und Triebe sowie die Fähigkeit, zu lernen, zu verstehen und rational zu denken, um vernünftig für uns und die Menschheit zu handeln.',
        },
        {
          description:
            'Im Transhumanismus sehen wir eine konsequente Ergänzung des evolutionären Humanismus. Neben Bildung und Wissenschaft dient insbesondere die moderne Technologie des 21. Jahrhunderts als Schlüssel zur optimalen Entfaltung und Weiterentwicklung menschlicher Fähigkeiten. Durch die rationale und verantwortungsbewusste Anwendung von Technologie soll der Menschheit ermöglicht werden, ihre evolutionär bedingten biologischen Einschränkungen zu überwinden. Neue Technologien sollen so sicher wie möglich gestaltet werden und so vielen Menschen wie möglich zugutekommen.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>