<template>
  <section class="comments-section">
    <TheTopList
      headerTitle="TopHeaderTitle"
      :TopHeaderTitle="TopHeaderTitle"
      :toplistcomments="positivecommentListTop"
    />
    <PositiveCommentInputter
      :partyDetails="partyDetails"
      MainButtonText="Bir partiden yapmasini istediginiz sey nedir?"
      PlaceholderText="Bir partiden ne yapmasini isterdiniz?"
      SubmitButtonText="Gonder"
      CloseButtonText="Kapat"
    />
    <h3 style="margin: 1em auto; text-align: center;">{{ headerTitle }}</h3>
    <ul class="comment-list">
      <li
        class="comment"
        v-for="comment in positivecommentList"
        :key="comment.id"
        @dblclick="commentLikeIncrementer(comment.id, 'positiveComments')"
      >
        <span class="text">{{ comment.doc.positivecomment }}</span>
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
export default {
  props: {
    headerTitle: { type: String, required: true },
    TopHeaderTitle: { type: String, required: true },
    partyDetails: {
      country: { type: String, required: true },
      dbcode: { type: String, required: true },
    },
  },
  data() {
    return {
      positivecommentList: [],
      positivecommentListTop: [],
    }
  },
  async fetch() {
    
      this.positivecommentList = await firebase
        .firestore()
        .collection(this.partyDetails.country)
        .doc(this.partyDetails.dbcode)
        .collection('positiveComments')
        .onSnapshot((snapshot) => {
          this.positivecommentList = []
          this.positivecommentListTop = []
          snapshot.forEach((doc) => {
            this.positivecommentList.push({ id: doc.id, doc: doc.data() })
            this.positivecommentListTop.push({ id: doc.id, doc: doc.data() })
          })
          console.log(this.positivecommentList)
          this.positivecommentListTop = this.positivecommentListTop
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
