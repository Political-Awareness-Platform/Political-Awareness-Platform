<template>
  <div class="party-page">
    <div class="party-intro">
      <div class="party-flag">
        <img src="~assets/logos/newzealand/visionnz.png" alt="visionnz-logo" />
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
      partyDetails: { country: 'newzealand', dbcode: 'visionnz' },
      partyInfo: {
        name: 'Vision New Zealand',
        shortname: 'Vision NZ',
        established: '4 December 2019',
        founder: 'Brian and Hannah Tamaki',
        address: '44 Bob Charles Drive Golflands Auckland 2013',
        internet_address: '',
        public_relation: 'Anne Williamson',
        current_member: '',
        president: 'Hannah Lee',
        facebook: 'https://www.facebook.com/VisionNZparty/',
        twitter: '',
        phone: '',
      },
      partyPurposes: [
        {
          description:
            'Believe there is only one God, who is undivided and inseparable in essence, and within this one essence there are three eternal distinctions, the Father, the Son (Jesus Christ), and the Holy Spirit. They recognize the Holy Bible to be the Word of God, which is infallible and the supreme authority in all matters of faith and morals, upon which governing mandates should be founded and measured. ',
        },
        {
          description:
            'Pledge to be faithful and loyal to our Country and to govern in the best interests of present and future generations, upholding principles of truth, integrity, and honour. ',
        },
        {
          description:
            'Honour the ‘Treaty of Waitangi’ (Te Tiriti o Waitangi) as a significant foundational document. Moreover, the Treaty is recognized as a ‘covenant’ agreement, which is perpetually relevant and binding.',
        },
        {
          description:
            'Will strive for liberty and opportunity for every New Zealander regardless of race, gender, or status, promoting social harmony and national unity. ',
        },
        {
          description:
            'Will pursue economic excellence in an open market economy, supporting the development of local enterprise in pursuit of both local and global significance. Moreover, Vision New Zealand will maintain sound economic practice and judgement vested in the best interests of all New Zealanders.',
        },
        {
          description:
            'Are committed to protecting and maintaining a safe and clean natural environment for all New Zealanders. ',
        },
        {
          description:
            'Regard first-class quality services pertaining to health, welfare, and education to be an inherent right of every New Zealander.',
        },
        {
          description:
            'Will uphold the rule of Law, Order and Justice, protect the sanctity of life and the freedom of every New Zealander. ',
        },
        {
          description:
            'Will present the Nation of New Zealand to the international community as one rich in heritage, culture, unity, and strength, uncompromising in truth, justice, and integrity, a model for international harmony, generational blessing and prosperity.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
