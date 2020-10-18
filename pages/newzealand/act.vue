<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/newzealand/act.png" alt="act-logo" />
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
      partyDetails: { country: 'newzealand', dbcode: 'act' },
      partyInfo: {
        name: 'ACT',
        shortname: 'ACT',
        established: '17 February 1995',
        founder: 'Derek Quigley',
        address: 'ACT New Zealand PO Box 99651 Newmarket Auckland 1149',
        internet_address: 'www.act.org.nz',
        public_relation: 'Danae Smith',
        current_member: '',
        president: 'David Seymour',
        facebook: 'https://www.facebook.com/actparty/',
        twitter: 'https://twitter.com/actparty',
        phone: '021 567 301',
      },
      partyPurposes: [
        {
          description:
            'ACT believes that public policy matters. There are many things we as a nation cannot easily change about New Zealand. We cannot change our size, population, location or endowment of natural resources. Public policy, by contrast, is entirely in our hands. ACT, as a constructive and solutions-focused political party, exists to promote and implement better policy for all New Zealanders, particularly through reducing the role of government and increasing the role of free markets.',
        },
        {
          description:
            'That it is inherent in the nature of human beings as individuals that they are the owners of their own lives and must be free to act according to their own judgments so long as they accept and respect the like freedom of others; and',
        },
        {
          description:
            'That the proper purpose of government is to enact and enforce laws, and to take such action as may be necessary to secure freedom of the individual from the actions of others, including those others who constitute the government, which could constrain individuals from exercising ownership of their own lives',
        },
        {
          description:
            'All people should be equal before the law as guaranteed in Article III of the Treaty of Waitangi, regardless of race, gender, sexuality, religion or political belief.',
        },
        {
          description:
            'Freedom of expression is essential to a free society and must be promoted, protected and preserved without restriction other than for incitement, criminal nuisance or defamation.',
        },
        {
          description:
            'Regulatory rules should provide for citizens to be able to recall improperly made laws and regulations through formal Court proceedings.',
        },
        {
          description:
            'Only democratically elected representatives should vote in Councils and Parliament.',
        },
        {
          description:
            'Citizenship and permanent residency should be subject to applicants affirming New Zealand’s values as outlined above.',
        },
        {
          description:
            'Income taxes should be levied at one flat rate and capital should never be taxed.',
        },
        {
          description:
            'Government or Councils should not own, operate, invest in, loan to, or make grants to any entity that seeks to compete in the private sector.',
        },
        {
          description:
            'Employment should be by private contract between employee and employer, and membership of any association of either employees or employers should be entirely voluntary.',
        },
        {
          description:
            'Foreign investment should be restricted only if an investment threatens national security.',
        },
        {
          description:
            'Trade should be free of tariffs and non-tariff barriers other than those necessary for national security and bio-security.',
        },
        {
          description:
            'Pollution and natural resources should be managed with free market solutions such as polluter pays and tradeable quotas.',
        },
        {
          description:
            'Wherever possible, conservation measures should be undertaken by private means rather than by government programmes.',
        },
        {
          description:
            'Every child should be allocated an education account through which they may direct all taxpayer education funding to their choice of public or private provider.',
        },
        {
          description:
            'Welfare entitlements other than for sickness and disability should be time-limited. Thereafter welfare entitlements should be in the form of managed assistance.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
