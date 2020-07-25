<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/newzealand/outdoorsparty.jpg" alt="outdoorsparty-logo" />
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
      partyDetails: { country: 'newzealand', dbcode: 'newzealandoutdoorsparty' },
      partyInfo: {
        name: 'New Zealand Outdoors Party',
        shortname: 'NZ Outdoors Party',
        established: '11 August 2017',
        founder: 'Alan Simmons',
        address: '99 Grace Rd. RD2 Turangi 3382',
        internet_address: 'www.outdoorsparty.co.nz',
        public_relation: 'Jenn Haakma',
        current_member: '',
        president: 'Alan Simmons',
        facebook: 'https://www.facebook.com/nzoutdoorsparty/',
        twitter: '',
        phone: '07 386 7576',
      },
      partyPurposes: [
        {
          description:
            'The Party will raise the importance of the outdoors by advocating for the following through the Parliamentary process; Our seas, our rivers, our lakes, our beaches and our land all belong to the people of New Zealand; Our access and enjoyment of our natural environment is a given; it’s part of our heritage, our culture, our way of life and it’s why tourists come here; Our unique outdoor environment will continue to provide food, recreation and social benefit for generations forever, without question, without compromise.',
        },
        {
          description:
            'The Party will develop and publish principles and policies to enable the above Aims to be realised.',
        },
        {
          description:
            'The Party will make its utmost endeavour to elect competent men and women to the Parliament of New Zealand.',
        },
        {
          description:
            'To obtain the Objectives the Party may enter into arrangements, including component Party arrangements with other political parties or organisations.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
