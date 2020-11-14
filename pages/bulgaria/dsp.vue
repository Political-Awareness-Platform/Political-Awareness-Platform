<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/bulgaria/DPS_logo.png" alt="dps-logo" />
      </div>
      <PartyDetails :partyInfo="partyInfo" :partyDetails="partyDetails" />
    </div>
    <PartyPurpose :partyPurposeList="partyPurposes" purposeText="Party Purposes" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      partyDetails: { country: 'bulgaria', dbcode: 'dps' },
      partyInfo: {
        name: 'Movement for Rights and Freedoms',
        shortname: 'DPS',
        established: '4 January 1990',
        founder: 'Ahmed Dogan',
        address: 'bul. Alexander Stamboliyski 45A, Sofia, Bulgaria',
        internet_address: 'www.dps.bg',
        public_relation: '-',
        current_member: '~40,000[',
        president: 'Mustafa Karadayi',
        facebook: 'https://www.facebook.com/oblastensavetDPSSofia/',
        twitter: '',
        phone: '+ 02 811 44 42',
      },
      partyPurposes: [
        {
          description:
            "Dvizhenie za prava i svobodi (DPS) is a centrist[5] political party in Bulgaria with a support base among minority communities.",
        },
        {
          description:
            'It is a member of the Liberal International and the Alliance of Liberals and Democrats for Europe (ALDE). While representing the interests of Muslims, especially Turks and to a lesser extent Pomaks (Muslim Bulgarians), the party also receives the largest share of Romani votes and 9 out of its 36 deputies are not of Muslim background.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
