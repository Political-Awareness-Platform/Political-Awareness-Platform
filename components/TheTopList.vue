<template>
  <section class="top-comments">
    <h3 style=" margin: 1em auto; text-align:center;">{{ TopHeaderTitle }}</h3>
    <ul class="top-comment-list">
      <li class="comment" v-for="comment in toplistcomments" :key="comment.id">
        <span class="text">{{ comment.doc.positivecomment || comment.doc.negativecomment}}</span>
        <div>
          <span class="votes">{{ comment.doc.like }}</span>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    TopHeaderTitle:{ type: String, required: true },
    toplistcomments: { type: Array, required: true }
  }
}
</script>

<style lang="scss" scoped>
.top-comments {
  margin-top: 1em;
  .top-comment-list {
    margin: 0;
    padding: 4px;
    .comment {
      padding: 20px;
      margin: 10px auto;
      list-style-type: none;
      background: white;
      border-radius: 10px;
      box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
      position: relative;
      // display: flex;
      // justify-content: space-between;

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