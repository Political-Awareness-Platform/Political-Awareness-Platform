<template>
  <div class="comment-input-section">

    <Authentication v-show="showModalNegative === true && !this.$store.state.user.userUID" />

    <button class="negative-comment-button" v-show="!showModalNegative" @click="showModalNegative = true" > {{ $t('NegativeCommentSection.InputterButtonMessage')}} </button>

    <textarea v-show="showModalNegative && this.$store.state.user.userUID" class="negative-comment-textarea" type="text" minlength="5" maxlength="1000" v-model="negativecomment" />

    <div class="buttons">
      <button class="small-buttons" v-show="showModalNegative && this.$store.state.user.userUID" type="submit"  @click="submitNegativeComment(), (showModalNegative = false)" > {{ $t('NegativeCommentSection.InputterSubmitButton')}} </button>
      <button class="small-buttons" v-show="showModalNegative && this.$store.state.user.userUID" @click="showModalNegative = false" > {{ $t('NegativeCommentSection.InputterCloseButton')}} </button>
    </div>
  </div>
</template>

<script>
import { fireDB } from '@/plugins/firebaseConfig.js'
export default {
  props: { 
    country: { type: String, required: true }, 
    dbcode: { type: String, required: true } 
  },
  data() {
    return {
      showModalNegative: false,
      negativecomment: '',
    }
  },
  methods: {
    submitNegativeComment() {
      if (this.negativecomment.length < 2) {
        console.log("You better write something");
      } else if (this.$store.state.user.userUID) {
  
        fireDB.collection(this.country).doc(this.dbcode).collection('negativeComments')
        .add({
            negativecomment: this.negativecomment,
            like: 0,
            likedBy: [this.$store.state.user.userUID],
          })
          .then(function (data) {
            console.log('Document successfully written!', data)
          })
          .catch(function (error) {
            console.error('Error writing document: ', error)
          })
        this.negativecomment = ''
        this.showModalNegative = false
      } 
    },
  },
}
</script>

<style lang="scss" scoped>
.comment-input-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
}

.negative-comment-button {
  padding: 25px 50px;
  border: 0;

  font-weight: bold;
  font-family: inherit;
  cursor: pointer;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 5px 5px 19px #a6a6a6, -5px -5px 19px #ffffff;
  &:focus {
    outline: 0;
  }
  &:active {
    outline: none;
    border: none;
    box-shadow: inset 5px 5px 10px #a6a6a6, inset -5px -5px 10px #ffffff;
  }
}

.negative-comment-textarea {
  width: 100%;
  border: 1px silver solid;
  font-size: 1em;
  padding: 20px;
  font-family: inherit;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 5px 5px 19px #a6a6a6, -5px -5px 19px #ffffff;
  &:focus {
    outline: none;
    border: none;
    box-shadow: inset 5px 5px 10px #a6a6a6, inset -5px -5px 10px #ffffff;
  }
}

.small-buttons {
  margin-top: 10px;
  padding: 10px 20px;
  border: 0;
  font-weight: bold;
  font-family: inherit;
  cursor: pointer;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 5px 5px 19px #a6a6a6, -5px -5px 19px #ffffff;
  &:focus {
    outline: 0;
  }
  &:active {
    outline: none;
    border: none;
    box-shadow: inset 5px 5px 10px #a6a6a6, inset -5px -5px 10px #ffffff;
  }
}
</style>