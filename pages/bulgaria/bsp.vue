<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/bulgaria/BSP_logo.png" alt="bsp-logo" />
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
      partyDetails: { country: 'bulgaria', dbcode: 'bsp' },
      partyInfo: {
        name: 'Bulgarian Socialist Party',
        shortname: 'BSP',
        established: '2 August 1891',
        founder: 'Aleksandar Lilov',
        address: '20 Positano Street, Sofia, Bulgaria',
        internet_address: 'www.bsp.bg',
        public_relation: '-',
        current_member: '80,236',
        president: 'Korneliya Ninova',
        facebook: 'https://www.facebook.com/BulgarianSocialistParty',
        twitter: 'https://twitter.com/BSP_Bulgaria',
        phone: '+ (359 2) 8107200',
      },
      partyPurposes: [
        {
          description:
            "Its adopted political agenda proclaims the values ​​of European democracy: complete political freedom from the press, speech and belief; a dignified moral human life; state institutions guaranteeing human and civil rights. As part of the 'world' social democracy, it proclaimed its civilizing role in Bulgaria's accession to European political and spiritual standards.",
        },
        {
          description:
            'From the very beginning, the Party of Bulgarian Socialists has been developing as a typical parliamentary political force. Its representatives in parliament are the authors of a number of bills in the field of economic, political and cultural life in Bulgaria. They are irreconcilable to the violations in the constitutional government of the country and contribute to a considerable extent to the establishment of a democratic atmosphere in Bulgarian political life. One of the most characteristic features of the party during all periods of its development is its consistent struggle against war and militarism, for a peaceful and just solution of national problems and complex Balkan contradictions.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
