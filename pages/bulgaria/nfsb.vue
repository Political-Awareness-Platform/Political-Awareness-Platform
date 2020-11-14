<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/bulgaria/NFSB_logo.png" alt="nfsb-logo" />
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
      partyDetails: { country: 'bulgaria', dbcode: 'nfsb' },
      partyInfo: {
        name: 'National Front for the Salvation of Bulgaria',
        shortname: 'NFSB',
        established: '17 May 2011',
        founder: 'Boycho Branzov',
        address: 'ul. G.S.Rakovski 134, Sofia, Bulgaria',
        internet_address: 'www.nfsb.bg',
        public_relation: '-',
        current_member: '~15,000',
        president: 'Valeri Simeonov',
        facebook: 'https://www.facebook.com/PPNFSB/',
        twitter: '',
        phone: '+359 894 545 515',
      },
      partyPurposes: [
        {
          description:
            "BFSB is a nationalist political party in Bulgaria.",
        },
        {
          description:
            '1. Preservation of the integrity on the territory of the Republic of Bulgaria. Establishing an indivisible, independent and strong Bulgaria.',
        },
        {
          description:
            "2. Establishment of a strong, united and independent nation - a condition for the prosperity of Bulgaria.",
        },
        {
          description:
            "3. Protection of life, health, property and rights of all Bulgarian citizens, as well as improvement of their standard of living, covering traditional spirituality, education, work and material well-being.",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
