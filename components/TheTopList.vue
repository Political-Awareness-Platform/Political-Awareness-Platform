<template>
  <section class="top-comments">
    <h1 style=" margin: 1em auto;">
      {{ headerTitle }}
    </h1>
    <ul class="top-comment-list">
      <li class="comment" v-for="comment in toplistcomments" :key="comment.id">
        <span class="text">{{ comment.doc.positivecomment ||  comment.doc.negativecomment}}</span>
        <div>
          <span class="votes">{{ comment.doc.like }}</span>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['toplistcomments', 'headerTitle']
}
</script>

<style lang="scss" scoped>
.top-comments {
  margin-top: 1em;

  .top-comment-list {
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
