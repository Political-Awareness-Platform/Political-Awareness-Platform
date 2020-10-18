<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/newzealand/nzlabour.jpg" alt="nzlabour-logo" />
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
      partyDetails: { country: 'newzealand', dbcode: 'labourparty' },
      partyInfo: {
        name: 'New Zealand Labour Party',
        shortname: 'Labour Party',
        established: '17 February 1995',
        founder: '',
        address: 'New Zealand Labour Party PO Box 784 Wellington 6140',
        internet_address: 'www.labour.org.nz',
        public_relation: 'Dianna Lacy',
        current_member: '',
        president: 'Rt Hon Jacinda Ardern',
        facebook: 'https://www.facebook.com/NZLabourParty/',
        twitter: 'https://twitter.com/nzlabour',
        phone: '(04) 384 7649',
      },
      partyPurposes: [
        {
          description:
            'All political authority comes from the people by democratic means, including universal suffrage, regular and free elections with a secret ballot;',
        },
        {
          description:
            'The natural resources of New Zealand belong to all the people and these resources, and in particular non-renewable resources, should be managed for the benefit of all, including future generations;',
        },
        {
          description:
            'All people shall have equal access to all social, economic, cultural, political and legal spheres, regardless of wealth or social position, and to continuing participation in the democratic process;',
        },
        {
          description:
            'Co-operation, rather than competition, should be the main governing factor in economic relations, in order that a greater amount, and a just distribution, of wealth can be ensured;',
        },
        {
          description:
            'All people are entitled to dignity, self-respect and the opportunity to work;',
        },
        {
          description:
            'All people, either individually or in groups, may own wealth or property for their own use, but in any conflict of interest people are always more important than property and the state must ensure a just distribution of wealth;',
        },
        {
          description:
            'Te Tiriti o Waitangi/The Treaty of Waitangi is the founding document of New Zealand, and the Treaty should be honoured in the Party, government, society and the whanau;',
        },
        {
          description:
            'Peace and social justice should be promoted throughout the world by international cooperation and mutual respect; and',
        },
        {
          description:
            'The same basic human rights, protected by the State, apply to all people, regardless of race, sex, marital status, sexual orientation, gender identity, age, religious faith, political belief or disability',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
