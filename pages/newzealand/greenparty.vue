<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/newzealand/greennz.jpg" alt="greennz-logo" />
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
      partyDetails: { country: 'newzealand', dbcode: 'greenparty' },
      partyInfo: {
        name: 'Green Party',
        shortname: 'Green Party',
        established: '17 August 1995',
        founder: '',
        address: 'The Greens PO Box 11652 WELLINGTON 6142',
        internet_address: 'www.greens.org.nz',
        public_relation: 'Gwen Shaw',
        current_member: '',
        president: 'James Shaw',
        facebook: 'https://www.facebook.com/nzgreenparty',
        twitter: 'https://twitter.com/NZGreens',
        phone: '(04) 801 5102',
      },
      partyPurposes: [
        {
          description:
            'The basis of ecological wisdom is that human beings are part of the natural world. This world is finite, therefore unlimited material growth is impossible. Ecological sustainability is paramount.',
        },
        {
          description:
            'Unlimited material growth is impossible. Therefore the key to social responsibility is the just distribution of social and natural resources, both locally and globally.',
        },
        {
          description:
            'For the implementation of ecological wisdom and social responsibility, decisions will be made directly at the appropriate level by those affected.',
        },
        {
          description:
            'Non-violent conflict resolution is the process by which ecological wisdom, social responsibility and appropriate decision making will be implemented. This principle applies at all levels.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
