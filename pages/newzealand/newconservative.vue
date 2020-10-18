<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/newzealand/newconservative.jpg" alt="newconservative-logo" />
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
      partyDetails: { country: 'newzealand', dbcode: 'newconservative' },
      partyInfo: {
        name: 'New Conservative',
        shortname: 'New Conservative',
        established: '6 October 2011',
        founder: '',
        address: 'New Conservative PO Box 13319 Auckland 1643',
        internet_address: 'https://www.newconservative.org.nz/',
        public_relation: 'Kevin Stitt',
        current_member: '',
        president: 'Leighton Baker',
        facebook: 'https://www.facebook.com/NewConservativeNZ/',
        twitter: 'https://twitter.com/leightonbakernz',
        phone: '021 281 5759',
      },
      partyPurposes: [
        {
          description:
            'A belief in loyalty to a sovereign and united New Zealand, the supremacy of democratic parliamentary institutions and the rule of law.',
        },
        {
          description:
            'A belief in the institutions of Parliament and the right of citizens to direct government by the democratic process including binding citizens initiated referenda.',
        },
        {
          description:
            'A belief in the equality of all New Zealanders and that all citizens, regardless of race, gender or religion, have equal rights and privileges.',
        },
        {
          description:
            'A belief in a decent society that values life, individual privacy, the freedom of the individual (including freedom of speech, conscience, faith and assembly), the right to defend one’s self and property and the importance of family.',
        },
        {
          description:
            'A belief that it is the responsibility of individuals to provide for themselves, their families and their dependents, while recognizing that government must respond to those who require assistance and compassion.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
