<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/volt.png" alt="volt-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'voltdeutschland' },
      partyInfo: {
        name: 'Volt Deutschland',
        shortname: 'VOLT',
        established: '29/03/2017',
        founder: '',
        address: 'Choriner Strasse 34 10435 Berlin',
        internet_address: 'https://www.volteuropa.org/',
        public_relation: '',
        current_member: '25,000',
        president: 'Valerie Sternberg',
        facebook: 'https://www.facebook.com/VoltEuropa',
        twitter: 'https://twitter.com/volteuropa',
        phone: '',
      },
      partyPurposes: [
        {
          description:
            'Quality public services are essential for all European citizens and residents.',
        },
        {
          description:
            'The European economies can become the engine for the progress of society and enable an adequate standard of living for all people.',
        },
        {
          description:
            'Nobody should be left behind in our society. Every person in Europe must be guaranteed equal rights and opportunities and human rights must be respected, applied and upheld!',
        },
        {
          description:
            'We want policies that are in line with the goals of sustainable development in areas such as climate change, fair international trade, sustainable agriculture, food security, biodiversity and international development cooperation.',
        },
        {
          description:
            'All Europeans should have the opportunity to make informed political decisions. They need to be able to influence politics not only through elections, but also to exercise their say in living and resilient democracies.',
        },
        {
          description:
            'The European Union is our joint project: we have succeeded in coming together as neighboring countries and building a Union that has ensured peace and prosperity for over sixty years.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>