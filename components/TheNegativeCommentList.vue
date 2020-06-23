<template>
  <section class="comments-section">
    <h1 style=" margin: 1em auto;">
      {{ headerTitle }}
    </h1>
    <ul class="comment-list">
      <li
        class="comment"
        v-for="comment in negativecommentlist"
        :key="comment.id"
        @dblclick="upvoteanegativecomment(comment.id)"
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
import firebase, { firestore } from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-functions'
export default {
  props: ['negativecommentlist', 'headerTitle', 'partyDetails'],
   methods: {
    submitNegativeComment() {
      if (this.$store.state.userUID) {
        firebase
          .firestore()
          .collection(this.partyDetails.ulke)
          .doc(this.partyDetails.dbcode)
          .collection('negativeComments')
          .add({
            negativecomment: this.negativecomment,
            like: 0,
            likedBy: [this.$store.state.userUID]
          })
          .then(function(data) {
            console.log('Document successfully written!', data)
          })
          .catch(function(error) {
            console.error('Error writing document: ', error)
          })

        this.positiveComments = ''
        this.showModalPositive = false
        this.showModalPositiveButton = true
      } else {
        this.$router.push('/login')
      }
    },
    upvoteanegativecomment(commentID) {
      const likeanegativecomment = firebase
        .functions()
        .httpsCallable('likeanegativecomment')
      likeanegativecomment({
        commentID: commentID,
        commentCountry: this.partyDetails.ulke,
        commentPartyDBCode: this.partyDetails.dbcode
      }).catch(error => {
        console.log(error.message)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.comments-section {
  margin-top: 1em;

  .comment-list {
    margin: 0;
    padding: 0;

    .comment {
      padding: 20px;
      margin: 10px auto;
      list-style-type: none;
      background: white;
      border-radius: 10px;
      box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
