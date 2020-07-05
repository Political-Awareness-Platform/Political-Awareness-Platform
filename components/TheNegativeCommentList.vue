<template>
  <section class="comments-section">
    <TheTopList
      headerTitle="TopHeaderTitle"
      :TopHeaderTitle="TopHeaderTitle"
      :toplistcomments="negativecommentListTop"
    />
    <NegativeCommentInputter
      :partyDetails="partyDetails"
      MainButtonText="Bir partiden yapmamasini istediginiz sey nedir?"
      PlaceholderText="Bir partiden ne yapmamasini isterdiniz?"
      SubmitButtonText="Gonder"
      CloseButtonText="Kapat"
    />
    <h3 style="margin: 1em auto; text-align: center;">{{ headerTitle }}</h3>
    <ul class="comment-list">
      <li
        class="comment"
        v-for="comment in negativecommentList"
        :key="comment.id"
        @dblclick="commentLikeIncrementer(comment.id, 'negativeComments')"
      >
        <span class="text">{{ comment.doc.negativecomment }}</span>
        <div>
          <span class="votes">{{ comment.doc.like }}</span>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-functions'
import TheTopList from '@/components/TheTopList'
export default {
  components: { TheTopList },
  props: ['headerTitle', 'TopHeaderTitle', 'partyDetails'],
  data() {
    return {
      negativecommentList: [],
      negativecommentListTop: [],
    }
  },
  async fetch() {
    this.negativecommentList = await firebase
      .firestore()
      .collection(this.partyDetails.country)
      .doc(this.partyDetails.dbcode)
      .collection('negativeComments')
      .onSnapshot((snapshot) => {
        this.negativecommentList = []
        this.negativecommentListTop = []
        snapshot.forEach((doc) => {
          this.negativecommentList.push({ id: doc.id, doc: doc.data() })
          this.negativecommentListTop.push({ id: doc.id, doc: doc.data() })
        })
        console.log(this.negativecommentList)
        this.negativecommentListTop = this.negativecommentListTop
          .sort((a, b) => b.doc.like - a.doc.like)
          .slice(0, 5)
      })
  },
  fetchOnServer: false,
  methods: {
    commentLikeIncrementer(commentID, commentType) {
      const commentLikeIncrementer = firebase
        .functions()
        .httpsCallable('commentLikeIncrementer')
      commentLikeIncrementer({
        commentID: commentID,
        commentCountry: this.partyDetails.country,
        commentPartyDBCode: this.partyDetails.dbcode,
        commentType: commentType,
      }).catch((error) => {
        console.log(error.message)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.comments-section {
  margin-top: 1em;
  .comment-list {
    margin: 0;
    padding: 4px;
    max-height: 500px;
    overflow-y: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }

    .comment {
      padding: 20px;
      margin: 10px auto;
      list-style-type: none;
      background: white;
      border-radius: 10px;
      box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
