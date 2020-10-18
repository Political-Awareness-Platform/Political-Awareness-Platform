<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/newzealand/oneparty.jpg" alt="oneparty-logo" />
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
      partyDetails: { country: 'newzealand', dbcode: 'oneparty' },
      partyInfo: {
        name: 'ONE Party',
        shortname: 'ONE Party',
        established: '9 July 2020',
        founder: 'Edward Shanly',
        address: '199A Vogel Street Roslyn Palmerston North 4414',
        internet_address: 'https://oneparty.net/',
        public_relation: 'Bonita Belworthy',
        current_member: '',
        president: 'Edward Shanly',
        facebook: 'https://www.facebook.com/OneParty2020/',
        twitter: 'https://twitter.com/OneParty2020',
        phone: '027 455 5048',
      },
      partyPurposes: [
        {
          description:
            '',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
