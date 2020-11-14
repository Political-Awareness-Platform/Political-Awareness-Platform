<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/bulgaria/Ataka_logo_transparent.png" alt="ataka-logo" />
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
      partyDetails: { country: 'bulgaria', dbcode: 'attack' },
      partyInfo: {
        name: 'Attack',
        shortname: 'Attack',
        established: '17 April 2005',
        founder: 'Volen Siderov',
        address: '	1 Vrabcha St., 1000 Sofia, Bulgaria',
        internet_address: 'ataka.bg',
        public_relation: '-',
        current_member: '',
        president: 'Volen Siderov',
        facebook: 'https://www.facebook.com/ataka.pobeda/',
        twitter: 'https://twitter.com/atakaBG',
        phone: '0882 662 287',
      },
      partyPurposes: [
        {
          description:
            'They define Bulgaria as a one-nation state and assert the supremacy of the state and the Bulgarian nation above ethnic and religious diversity.',
        },
        {
          description:
            'The Attack Party is oriented towards nationalism.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
