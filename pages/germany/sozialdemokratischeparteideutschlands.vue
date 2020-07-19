<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/germany/sdp.png" alt="sdp-logo" />
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
      partyDetails: { country: 'germany', dbcode: 'sozialdemokratischeparteideutschlands' },
      partyInfo: {
        name: 'Sozialdemokratische Partei Deutschlands',
        shortname: 'SDP',
        established: '23 May 1863',
        founder: '?',
        address: 'Wilhelmstrasse 141 10963 Berlin',
        internet_address: 'https://www.spd.de/',
        public_relation: '?',
        current_member: '419,300',
        president: 'Saskia Esken and Norbert Walter-Borjans',
        facebook: 'https://www.facebook.com/SPD',
        twitter: 'https://twitter.com/spdde',
        phone: '(030) 25991-500',
      },
      partyPurposes: [
        {
          description:
            'According to the Hamburg program for the SPD, freedom , justice and solidarity are the basic values ​​of democratic socialism . So social justice is one of their primary political guiding principles. The coordinated social market economy should be strengthened and its earnings distributed fairly, as this is considered necessary for the well-being of the entire population. The SPD continues to believe that a strong state and an effective welfare state are necessary in order to be able to protect weaker sections of the population. To this end, it places value on a financial policythat is “not at the expense of future generations” and will end or reduce government debt in the long term . Under the heading of a preventive welfare state , changes to the social system are welcomed that are intended to strengthen personal responsibility and were implemented within the framework of Agenda 2010. In terms of social policy, the SPD supports its program for civil rights , opening up society and citizen participation. In terms of foreign policy, it wants to strengthen world peace by balancing interests. Globalization should be shaped “through a democratic policy”. It strives to expand and deepen European unification.',
        }
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
