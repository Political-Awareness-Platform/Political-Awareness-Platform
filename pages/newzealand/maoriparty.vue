<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/newzealand/maori.jpg" alt="maori-logo" />
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
      partyDetails: { country: 'newzealand', dbcode: 'maoriparty' },
      partyInfo: {
        name: 'Maori Party',
        shortname: 'Maori Party',
        established: '24 June 2004',
        founder: 'Dame Tariana Turia & Sir Pita Sharples',
        address: '19B Cunliffe Street, Johnsonville Wellington 6037',
        internet_address: 'https://www.maoriparty.org',
        public_relation: 'Waiwera Rose Waetford',
        current_member: '',
        president: 'Debbie Ngarewa-Packer & John Tamihere',
        facebook: 'https://www.facebook.com/MaoriParty/',
        twitter: '',
        phone: '027 359 9545',
      },
      partyPurposes: [
        {
          description:
            'Manaakitanga is behaviour that acknowledges the mana of others as having equal or greater importance than one’s own, through the expression of aroha, hospitality, generosity and mutual respect. By such behaviour, all parties are elevated and our status is enhanced, building unity through humility and the act of giving. The Party must endeavour to express manaakitanga towards others – be they political allies or opponents, Māori or non-Māori organisations – taking care not to trample mana, while clearly defining our own.',
        },
        {
          description:
            'Rangatiratanga is the expression of the attributes of a rangatira (weaving the people together) including humility, leadership by example, generosity, altruism, diplomacy, and knowledge of benefit to the people. As an organisation, the importance of walkingthe talk, following through on commitments made, integrity and honesty is demonstrated. As a people, rangatiratanga is reflected in the promotion of selfdetermination for Māori, and an expression of the rights defined by Mana Atua, Mana Tupuna and Mana Whenua.',
        },
        {
          description:
            'Whanaungatanga underpins the social organisation of whānau, hapū and iwi and includes rights and reciprocal obligations consistent with being part of a collective. It is the principle that binds individuals to the wider group and affirms the value of the collective. Whanaungatanga is inter-dependence with each other and recognition that the people are our wealth.',
        },
        {
          description:
            'Kotahitanga is the principle of unity of purpose and direction. It is demonstrated through the achievement of harmony and moving as one. All are encouraged to make a contribution, to have their say and then, together, to reach a consensus. The Party will promote harmonious relationships between all people.',
        },
        {
          description:
            'This is reflected in the belief that there is a spiritual existence alongside the physical. It is expressed through the intimate connection of the people to our maunga, awa, moana and marae, and to tūpuna and atua. These connections are affirmed through knowledge and understanding of atua Māori and must be maintained and nourished with the aim of achieving wellness. It is central to the everyday lives of Māori people and is integral to the way Māori view the world.',
        },
        {
          description:
            'Mana whenua is the principle that defines Māori by the land occupied by right of ancestral claim. It defines tūrangawaewae and ūkaipō, the places where you belong, where you count, where you are important and where you can contribute. Mana whenua is essential for Māori well-being. The places Māori find ourselves, our strength, our energy are where Māori have mana whenua. Once grounded to the land and home, Māori are able to participate in society in a positive, productive manner.',
        },
        {
          description:
            'Kaitiakitanga embraces the spiritual and cultural guardianship of Te Ao Mārama, a responsibility derived from whakapapa. Kaitiakitanga entails an active exercise of responsibility in a manner beneficial to resources and the welfare of the people. It promotes the growth and development of the Māori people in all spheres of livelihood so that Māori can anticipate a future of living in good health and in reasonable prosperity. Preserving and maintaining the Party so it can continue to fulfil its functions and duties is implicit within this kaupapa.',
        },
        {
          description:
            'Mana Tupuna is that which defines who Māori are as people. It is the bridge that links us to our ancestors, that defines our heritage and gives us the stories which define our place in the world. Mana Tupuna helps us know who we are, from whom we descend, and what our obligations are to those who come after us. This is achieved through the recital of whakapapa, tracing the descent from Te Kore to Te Pō and, eventually, through to Te Ao Mārama. Whakapapa is also a tool utilised in analysing and synthesising information and knowledge.',
        },
        {
          description:
            'Te Reo Māori is the cornerstone of all that is Māori. Accelerating the revival of te reo Māori is a central focus of the Māori Party. Te reo Māori is the medium through which Māori explain the world. The survival of the people as Māori, and the uniqueness of Māori as a race, will be enhanced through the maintenance of te reo Māori.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
