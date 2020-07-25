<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/newzealand/socialcreditnz.jpg" alt="socialcreeditnz-logo" />
      </div>
      <PartyDetails :partyInfo="partyInfo" :partyDetails="partyDetails" />
    </div>
    <PartyPurpose :partyPurposeList="partyPurposes" purposeText="Party Purposes" />
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
      partyDetails: { country: 'newzealand', dbcode: 'socialcreditparty' },
      partyInfo: {
        name: 'The New Zealand Democratic Party for Social Credit',
        shortname: 'Social Credit',
        established: '10 August 1995',
        founder: 'H. M. Rushworth',
        address: 'Social Credit 42 Reyburn House Lane WHANGAREI 0110',
        internet_address: 'https://www.socialcredit.nz/',
        public_relation: 'Anne Leitch',
        current_member: '',
        president: 'Chris Leitch',
        facebook: 'https://www.facebook.com/SocialCreditNZ/',
        twitter: '',
        phone: '09 430 0089',
      },
      partyPurposes: [
        {
          description:
            'To recover effective control of New Zealand\'s economic affairs and establish greater political independence. ',
        },
        {
          description:
            'To ensure a property owning democracy, in which the ownership of assets is spread as widely as possible amongst individuals.',
        },
        {
          description:
            'To establish a social credit economy where people will be able to use the country\'s resources without mortgaging their own and their children\'s future.',
        },
        {
          description:
            'To protect and enhance our world\'s life support systems – air, water and soil – and preserve the richness and beauty of natural, biological ecosystems. ',
        },
        {
          description:
            'Within the limits of resources available, to encourage the introduction of all forms of labour-saving technology, thereby increasing output, the standard of living and the quality of life. ',
        },
        {
          description:
            'To ensure that, in an age of increasing automation, with machines taking over the work of more and more people, incomes will nevertheless be maintained so that we all may share the benefits',
        },
        {
          description:
            'To restore and stabilise the purchasing power of money, thereby enhancing and protecting the value of incomes and savings',
        },
        {
          description:
            'To encourage skill in all fields of endeavour by ensuring that ability is justly rewarded. ',
        },
        {
          description:
            'To reduce the working week progressively, without loss of income or increased costs to employers, and without endangering either the employers or employees right to chose, so that all may have the opportunity to share equitably in the work and leisure available.',
        },
        {
          description:
            'To provide more educational, cultural and recreational facilities and encourage their use. ',
        },
        {
          description:
            'To promote religious and racial tolerance, understanding and respect, accepting all cultures for mutual enrichment. ',
        },
        {
          description:
            'To promote a stable community through protection of the family as a basic unit.',
        },
        {
          description:
            'To provide a democratic Parliamentary representation in which the members have regard to the expressed wishes of the Electorate.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
