<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/vpartei.png" alt="vpartei-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'vpartie' },
      partyInfo: {
        name: 'Partei für Veränderung, Vegetarier und Veganer',
        shortname: 'V Partei',
        established: '30/04/2016',
        founder: '',
        address: 'Hochfeldstraße 4 86159 Augsburg',
        internet_address: 'https://v-partei.de/',
        public_relation: '',
        current_member: '1600',
        president: 'Roland V. Wegner',
        facebook: 'https://www.facebook.com/VPartei/',
        twitter: 'https://twitter.com/_VPartei_/',
        phone: '+49 (0) 821-29716264',
      },
      partyPurposes: [
        {
          description:
            'Niedrigere Besteuerung pflanzlicher Bio-Lebensmittel und regional hergestellter Produkte',
        },
        {
          description:
            'Tierrechte, Abschaffung von Tierversuchen, Alternativen zu Leder und Pelz',
        },
        {
          description:
            'Fluchtursachen beheben: Nahrungsmittel gerecht verteilen, Waffenexporte stoppen, Klimaschutz forcieren',
        },
        {
          description:
            'Abrüstung, Abzug von Atomraketen und ausländischem Militär',
        },
        {
          description:
            'Reformierung der EU: Stärkung des Parlaments, Einschränkung von Lobbyismus',
        },
        {
          description:
            'Entwicklung statt Wachstum: Nachhaltigkeit, Natur- und Ressourcenschonung, regenerative Energien',
        },
        {
          description:
            'Kontrollierter und umweltverträglicher Handel statt TTIP, CETA u. ä., gerechter Rundfunkbeitrag',
        },
        {
          description:
            'Verbraucherschutz: Trinkwasser in öffentliche Hand, erweiterte Kennzeichnungspflicht bei Lebensmitteln',
        },
        {
          description:
            'Pflanzlich-vollwertige Verpflegung in öffentlichen Einrichtungen',
        },
        {
          description:
            'Aufklärung über den gesundheitsförderlichen Nutzen pflanzlich-vollwertiger Kost u. a. in Schulen und Kochausbildung',
        },
        {
          description:
            'Ausrichtung des Gesundheitswesens nach Wohl der Menschen statt nach ökonomischen Gesichtspunkten',
        },
        {
          description:
            'Förderung umweltfreundlicher Verkehrsmittel',
        },
        {
          description:
            'Finanzielle Entlastung der Privathaushalte durch faire Aufteilung der Stromnebenkosten (EEG)',
        },
        {
          description:
            'Einführung eines gerechten Grundeinkommens',
        },
        {
          description:
            'Gleichstellung aller Geschlechter',
        },
        {
          description:
            'Abschaffung der Zeitumstellung',
        },
    
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>