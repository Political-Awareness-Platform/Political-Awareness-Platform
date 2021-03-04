<template>
  <section class="comments-section">
    <div class="top-comments">
    <h4 style=" margin: 1em auto; text-align:center;">{{ $t('NegativeCommentSection.TheTopDesireListTitle') }}</h4>
    <ul class="top-comment-list">
      <li class="comment" v-for="comment in negativecommentListTop" :key="comment.id">
        <span class="votes">⛔️  {{ comment.doc.like }}</span> {{ comment.doc.negativecomment}}
      </li>
    </ul>
    </div>
    <NegativeCommentInputter :partyDetails="partyDetails" />
    <h4 style="margin: 1em auto; text-align: center">{{ $t('NegativeCommentSection.DesiredList')}}</h4>
    <ul class="comment-list">
      <span v-show="alert" class="double-like-alert">You already liked it</span>
      <li class="comment" v-for="comment in negativecommentList" :key="comment.id" @dblclick="commentLikeIncrementer(comment.id, 'negativeComments')" >
        <span class="votes">⛔️ {{ comment.doc.like }}</span> {{ comment.doc.negativecomment }}
      </li>
    </ul>
  </section>
</template>

<script>
import { fireDB, fireFunc } from '@/plugins/firebaseConfig.js'
export default {
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
      alert: false
    }
  },
  async fetch() {

    this.negativecommentList = await fireDB.collection(this.partyDetails.country).doc(this.partyDetails.dbcode).collection('negativeComments')
      .onSnapshot((snapshot) => {
        this.negativecommentList = []
        this.negativecommentListTop = []
        snapshot.forEach((doc) => {
          this.negativecommentList.push({ id: doc.id, doc: doc.data() })
          this.negativecommentListTop.push({ id: doc.id, doc: doc.data() })
        })
        this.negativecommentListTop = this.negativecommentListTop.sort((a, b) => b.doc.like - a.doc.like).slice(0, 5)
      })
  },
  fetchOnServer: false,
  methods: {
    commentLikeIncrementer(commentID, commentType) {
      
      const commentLikeIncrementer = fireFunc.httpsCallable('commentLikeIncrementer');

      commentLikeIncrementer({
        commentID: commentID,
        commentCountry: this.partyDetails.country,
        commentPartyDBCode: this.partyDetails.dbcode,
        commentType: commentType,
      }).catch((error) => {
        console.log(error.message)
        if (error.message == 'already-liked') {
          this.alert = true;
          setTimeout( () => this.alert = false, 2000);
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.comments-section {
  margin-top: 1em;

  .top-comments {
  margin-top: 1em;

  .top-comment-list {
    margin: 0;
    padding: 4px;
    .comment {
      padding: 12px 8px;
      margin: 8px auto;
      list-style-type: none;
      background: white;
      border-radius: 10px;
      box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
      line-height: 24px;

      .votes {
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        padding: 4px 10px;
      }
    }
    }
  }

  .comment-list {
    padding: 8px 4px;
    max-height: 500px;
    overflow-y: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar { display: none; }

    .comment {
      padding: 12px 8px;
      margin: 8px auto;
      list-style-type: none;
      background: white;
      border-radius: 10px;
      line-height: 24px;
      box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);

      .votes {
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        padding: 4px 10px;
      }

    }

    .double-like-alert {
        border: 2px red solid;
        padding: 4px;
        background-color: yellow;
        border-radius: 4px;
    }
  }
}
</style>
