<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/friesen.png" alt="friesen-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'diefriesen' },
      partyInfo: {
        name: 'Die Friesen',
        shortname: 'Die Friesen',
        established: '07/2007',
        founder: '',
        address: 'Bundesverband-Postfach 1131 26442 Friedeburg',
        internet_address: 'http://www.die-friesen.eu/',
        public_relation: '',
        current_member: '40',
        president: 'Thomas Möller-Tobiassen',
        facebook: 'https://www.facebook.com/DieFriesen/',
        twitter: '',
        phone: '49 (0) 4934 497341',
      },
      partyPurposes: [
        {
          description:
            'Wir schließen uns zu einer friesischen Partei zusammen im Bewusstsein der besonderen friesischen Kultur, der Sprachen, Geschichte und Freiheitstradition und unserer darauf aufbauenden friesischen Identität, die uns mindestens so stark prägt wie die deutsche Staatsangehörigkeit. Wir wollen mehr Verantwortung für die Entwicklung unserer friesischen Region übernehmen, als es den Friesen in den letzten Jahrhunderten möglich war.',
        },
        {
          description:
            'Im 21. Jahrhundert werden die Nationalstaaten durch die fortschreitende europäische Integration im politischen Handeln an Bedeutung verlieren. Wir stehen für eine bessere und engere Zusammenarbeit mit Nord- und Westfriesland, damit die Frieslande in Europa Gehör finden, und für ein Höchstmaß an Autonomie und Selbstbestimmung.',
        },
        {
          description:
            'Wir treten dafür ein, dass sich die friesischen Werte im heutigen gesellschaftlichen und politischen Handeln stärker wiederfinden: persönliche Freiheit; gedankliche Unabhängigkeit; Verantwortung des Einzelnen für die Gemeinschaft und umgekehrt; gesellschaftliche Selbstorganisation.',
        },
        {
          description:
            'Ausgehend von diesem Gesellschaftsverständnis stellen wir folgende Forderungen für die Region: was vor Ort geregelt werden kann, soll auch vor Ort geregelt werden. Wir wollen die gesellschaftliche Solidarität fördern und die wirtschaftliche Wettbewerbsfähigkeit vorantreiben.',
        },
        {
          description:
            'Veränderungen sind das Wesen einer humanen Gesellschaft. Wir wollen aber darauf achten, dass bei diesen Veränderungen unsere Geschichte und unsere Tradition erkennbar und sichtbar bleiben.',
        },
        {
          description:
            'Um die Region zu fördern setzen wir uns ein für: die Förderung eines „sanften Tourismus auf friesische Art“; naturnahe Landbewirtschaftung; Auf- und Ausbau von regionalen Wertschöpfungsketten; Entwicklung von Konzepten zur Ansiedlung innovativer „High Tech Industrie.',
        },
        {
          description:
            'Die Region muss einen neuen Schub im Bereich seiner regionalspezifischen Infrastruktur erfahren; vor allem im Ausbau der öffentlichen Verkehrsmittel, des Küsten- und Naturschutzes.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>