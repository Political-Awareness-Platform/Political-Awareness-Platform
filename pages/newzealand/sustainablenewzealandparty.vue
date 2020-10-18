<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/newzealand/sustainablenz.png" alt="sustainablenz-logo" />
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
      partyDetails: { country: 'newzealand', dbcode: 'sustainablenewzealandparty' },
      partyInfo: {
        name: 'Sustainable New Zealand Party',
        shortname: 'SNZP',
        established: '4 December 2019',
        founder: 'Vernon Tava',
        address: 'SNZP, 5/66 Emily Place, Auckland Central 1010',
        internet_address: '',
        public_relation: 'Ivan Tava',
        current_member: '',
        president: 'Vernon Tava',
        facebook: 'https://www.facebook.com/sustainablenewzealandparty',
        twitter: 'https://twitter.com/SNZparty',
        phone: '+64 21 0232 4292',
      },
      partyPurposes: [
        {
          description:
            'Environmental sustainability: our first duty is the stewardship of New Zealand’s natural environment.',
        },
        {
          description:
            'Economic sustainability: the economy must work within natural constraints to ensure that economic growth does not come at an environmental cost.',
        },
        {
          description:
            'Social Sustainability: a sustainable society is one in which all people and their communities flourish.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
