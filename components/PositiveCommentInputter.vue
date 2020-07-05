<template>
  <div class="comment-input-section">
    <button
      class="positive-comment-button"
      v-show="!showModalPositive"
      @click="showModalPositive = true"
    >{{ this.MainButtonText }}</button>

    <textarea
      v-show="showModalPositive"
      class="positive-comment-textarea"
      type="text"
      minlength="5"
      maxlength="1000"
      :placeholder="this.PlaceholderText"
      v-model="positivecomment"
    />

    <div class="buttons">
      <button
        class="small-buttons"
        type="submit"
        v-show="showModalPositive"
        @click="submitPositiveComment(), showModalPositive = false"
      >{{ this.SubmitButtonText }}</button>
      <button
        class="small-buttons"
        v-show="showModalPositive"
        @click="showModalPositive = false"
      >{{ this.CloseButtonText }}</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-functions'
export default {
    props: {
      partyDetails: { type: Object, required: true },
      MainButtonText: { type: String, required: true },
      SubmitButtonText: { type: String, required: true },
      CloseButtonText: { type: String, required: true },
      PlaceholderText: { type: String, required: true }
    },
    data() {
        return {
        showModalPositive: false,
        positivecomment: ''
        }
    },
    methods: {
        submitPositiveComment() {
        if (this.$store.state.user.userUID) {
        firebase
          .firestore()
          .collection(this.partyDetails.country)
          .doc(this.partyDetails.dbcode)
          .collection('positiveComments')
          .add({
            positivecomment: this.positivecomment,
            like: 0,
            likedBy: [this.$store.state.user.userUID]
          })
          .then(function(data) {
            console.log('Document successfully written!', data)
          })
          .catch(function(error) {
            console.error('Error writing document: ', error)
          })
        this.positivecomment = ''
        this.showModalPositive = false
      } else {
        console.log("👎", " You must loggin to make a comment❗️");
        this.$router.push('/')
      }
    },
    }
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

.positive-comment-button {
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

.positive-comment-textarea {
  width: 100%;
  border: 0;

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