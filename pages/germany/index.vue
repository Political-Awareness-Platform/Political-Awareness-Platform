<template>
  <div class="country-page">
    <div class="country-intro">
      <div class="country-flag">
        <img src="~assets/flags/de.svg" alt="Germany-flag" />
      </div>
      <div class="country-info">
        <p><b>Aktive politische Parteien :</b> 51</p>
        <p><b>Politische Parteien im Parlament :</b> 14</p>
        <p><b>Anzahl der Wähler :</b> 61,675,529</p>
        <p><b>Teilnahme an der letzten Wahl :</b> 84.11%</p>
      </div>
    </div>
    <h2 style="text-align: center; margin: 2em 0px;">Politische Parteien</h2>
    <div class="country-parties">
      <div
        v-for="party in parties"
        :key="party.party_name"
        class="country-party-card"
      >
        <nuxt-link :to="party.link">
          {{ party.party_name }}
        </nuxt-link>
      </div>
    </div>
    <h2 style="text-align: center; margin: 2em 0px;">
      Ideale / imaginäre politische Partei
    </h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partyDetails: { country: 'germany', dbcode: 'imaginary' },
      parties: [
        {
          party_name: 'Christlich Demokratische Union Deutschlands',
          link: '/germany/christlichdemokratischeuniondeutschlands',
        },
        {
          party_name: 'Sozial Demokratische Partei Deutschlands',
          link: '/germany/sozialdemokratischeparteideutschlands',
        },
        {
          party_name: 'Alternative für Deutschland',
          link: '/germany/alternativefürdeutschland',
        },
        {
          party_name: 'Freie Demokratische Partei',
          link: '/germany/freiedemokratischepartei',
        },
        {
          party_name: 'Die Linke',
          link: '/germany/dielinke',
        },
        {
          party_name: 'Die Grünen',
          link: '/germany/diegrünen',
        },
        {
          party_name: 'Christlich Soziale Union in Bayern',
          link: '/germany/christlichsozialeunioninbayern',
        },
        {
          party_name: 'Freie Wähler',
          link: '/germany/freiewahler',
        },
        {
          party_name: 'Die PARTEI',
          link: '/germany/diepartei',
        },
        {
          party_name: 'Ökologisch Demokratische Partei',
          link: '/germany/okologischdemokratischepartei',
        },
        {
          party_name: 'Piraten Partei Deutschland',
          link: '/germany/piratenparteideutschland',
        },
        {
          party_name: 'Volt Deutschland',
          link: '/germany/voltdeutschland',
        },
        {
          party_name: 'Partei Mensch Umwelt Tierschutz',
          link: '/germany/parteimenschumwelttierschutz',
        },
        {
          party_name: 'Familien Partei Deutschlands',
          link: '/germany/familienparteideutschlands',
        },
        {
          party_name: 'Aktion Partei für Tierschutz',
          link: '/germany/aktionparteifürtierschutz',
        },
        {
          party_name: 'Christen für Deutschland',
          link: '/germany/christenfürdeutschland',
        },
        {
          party_name: 'Allianz für Menschenrechte, Tier- und Naturschutz',
          link: '/germany/allianzfürmenschenrechte',
        },
        {
          party_name: 'Allianz Deutscher Demokraten',
          link: '/germany/allianzdeutscherdemokraten',
        },
        {
          party_name: 'Anarchistische Pogo-Partei Deutschlands',
          link: '/germany/anarchistischepogoparteideutschlands',
        },
        {
          party_name: 'ARMINIUS Bund des deutschen Volkes',
          link: '/germany/arminiusbunddesdeutschenvolkes',
        },
        {
          party_name: 'Bündnis Grundeinkommen',
          link: '/germany/bündnisgrundeinkommen',
        },
        {
          party_name: 'Bayernpartei',
          link: '/germany/bayernpartei',
        },
        {
          party_name: 'Bergpartei, die Überpartei',
          link: '/germany/bergparteidieuberpartei',
        },
        {
          party_name: 'Bürgerrechtsbewegung Solidarität',
          link: '/germany/bürgerrechtsbewegungsolidaritat',
        },
        {
          party_name: 'Deutsche Zentrumspartei',
          link: '/germany/deutschezentrumspartei',
        },
        {
          party_name: 'Kommunistische Partei Deutschlands',
          link: '/germany/kommunistischeparteideutschlands',
        },
        {
          party_name: 'Demokratie in Bewegung',
          link: '/germany/demokratieinbewegung',
        },
        {
          party_name: 'Feministische Partei Die Frauen',
          link: '/germany/feministischeparteidiefrauen',
        },
        {
          party_name: 'Ab jetzt … Demokratie durch Volksabstimmung',
          link: '/germany/abjetztdemokratiedurchvolksabstimmung',
        },
        {
          party_name: 'Deutsche Kommunistische Partei',
          link: '/germany/deutschekommunistischepartei',
        },
        {
          party_name: 'Deutsche Soziale Union',
          link: '/germany/deutschesozialeunion',
        },
        {
          party_name: 'Marxistisch-Leninistische Partei Deutschlands',
          link: '/germany/marxistischleninistischeparteideutschlands',
        },
        {
          party_name: 'Achtsame Demokraten',
          link: '/germany/achtsamedemokraten',
        },
        {
          party_name: 'Mut',
          link: '/germany/mut',
        },
        {
          party_name: 'National Demokratische Partei Deutschlands',
          link: '/germany/nationaldemokratischeparteideutschlands',
        },
        {
          party_name: 'Neue Liberale – Die Sozialliberalen',
          link: '/germany/neueliberalediesozialliberalen',
        },
        {
          party_name: 'Partei für Franken',
          link: '/germany/parteifürfranken',
        },
        {
          party_name: 'Partei der Humanisten',
          link: '/germany/parteiderhumanisten',
        },
        {
          party_name: 'Partei der Vernunft',
          link: '/germany/parteidervernunft',
        },
        {
          party_name: 'Sozialistische Gleichheitspartei',
          link: '/germany/sozialistischegleichheitspartei',
        },
        {
          party_name: 'Die Friesen',
          link: '/germany/diefriesen',
        },
        {
          party_name: 'Der III. Weg',
          link: '/germany/derIIIweg',
        },
        {
          party_name: 'Die Republikaner',
          link: '/germany/dierepublikaner',
        },
        {
          party_name: 'Die Rechte',
          link: '/germany/dierechte',
        },
        {
          party_name: 'Die Urbane. Eine HipHop Partei',
          link: '/germany/dieurbane',
        },
        {
          party_name: 'Die Violetten',
          link: '/germany/dievioletten',
        },
        {
          party_name: 'Bürgerbewegung pro Deutschland',
          link: '/germany/bürgerbewegungprodeutschland',
        },
        {
          party_name: 'V Partei',
          link: '/germany/vpartie',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
