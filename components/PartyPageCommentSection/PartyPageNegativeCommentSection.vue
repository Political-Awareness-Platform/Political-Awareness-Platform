<template>
  <section class="comments-section">
    <TheTopList
      :TopHeaderTitle="TheTopListHeaderTitle"
      :toplistcomments="negativecommentListTop"
    />
    <NegativeCommentInputter
      :partyDetails="partyDetails"
      :MainButtonText="MainButtonText"
      :SubmitButtonText="SubmitButtonText"
      :CloseButtonText="CloseButtonText"
    />
    <h3 style="margin: 1em auto; text-align: center;">{{ HeaderTitle }}</h3>
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
  props: {
    partyDetails: {
      country: { type: String, required: true },
      dbcode: { type: String, required: true },
    },
  },
  data() {
    return {
      negativecommentList: [],
      negativecommentListTop: [],
      TheTopListHeaderTitle: 'Top 5 negative comments about this party',
      MainButtonText: 'What is the negative thing this party does?',
      SubmitButtonText: 'Submit',
      CloseButtonText: 'Close',
      HeaderTitle: 'Negative comments for this party',
    }
  },
  async fetch() {
    if (this.partyDetails.country == 'turkey') {
      this.TheTopListHeaderTitle = 'En kotu yaptigi 5 sey'
      this.MainButtonText = 'Sizce bu partinin en kotu yaptigi sey nedir?'
      this.SubmitButtonText = 'Gonder'
      this.CloseButtonText = 'Kapat'
      this.HeaderTitle = 'Negatif yaptiklari'
    } else if (this.partyDetails.country == 'germany') {
      this.TheTopListHeaderTitle = 'Top 5 negative Kommentare zu dieser Party'
      this.MainButtonText = 'Was ist das Negative, was diese Partei tut?'
      this.SubmitButtonText = 'Einreichen'
      this.CloseButtonText = 'Schließen'
      this.HeaderTitle = 'Negative Kommentare für diese Partei'
    }

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
        if (error.message == 'You already liked it') {
          this.$notify({
            message: 'You already 👍 it.',
            type: 'success',
            top: true,
            closeDelay: 1500,
            hideIcon: true,
          })
        }
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
      position: relative;

      .votes {
        position: absolute;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        padding: 4px 10px;
        right: 0;
        top: 0;
      }
    }
  }
}
</style>
