<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/zentrum.png" alt="zentrum-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'deutschezentrumspartei' },
      partyInfo: {
        name: 'Deutsche Zentrumspartei',
        shortname: 'Zentrum',
        established: '13/12/1870',
        founder: 'Joseph Görres',
        address: 'Straberger Weg 12 41542, Dormagen, NRW',
        internet_address: 'https://www.zentrumspartei.de/',
        public_relation: '',
        current_member: '600',
        president: 'Gerhard Woitzik',
        facebook: 'https://www.facebook.com/zentrumspartei/',
        twitter: 'https://twitter.com/DZP1870',
        phone: '',
      },
      partyPurposes: [
        {
          description:
            ' Das ZENTRUM bekennt sich zu den christlichen Wurzeln Europas und verteidigt die freiheitlich demokratische Grundordnung des Grundgesetzes der Bundesrepublik Deutschland.',
        },
        {
          description:
            'Das ZENTRUM  ist fest entschlossen, christliche Grundsätze für Staat und Gesellschaft in der politischen Arbeit umzusetzen.',
        },
        {
          description:
            'Das ZENTRUM will den umfassenden Schutz und die Achtung jeden menschlichen Lebens, das von Anfang an Person ist und damit Ursprung, Träger und Ziel der gesellschaftlichen Ordnung.',
        },
        {
          description:
            'Ehe und Familie sind die Grundlage der menschlichen Gemeinschaft. Daher sind ihr jene Mittel bereit zu stellen, die sie zur Erfüllung ihrer naturgegebenen Aufgabe benötigen und der Freiraum zu gewähren, dieser gerecht werden zu können.',
        },
        {
          description:
            'Subsidiarität, Solidarität und das Gemeinwohl sind die Quellen der politischen Arbeit des ZENTRUMs.',
        },
        {
          description:
            ' Das ZENTRUM fordert den verfassungsmäßigen Freiraum der christlichen Kirchen zu achten und ihre gesellschaftliche Aufgabe der Rückbindung an gemeinsame letzte Werte und Normen zu fördern und zu wahren.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>