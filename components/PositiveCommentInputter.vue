<template>
  <div class="comment-input-section">
     
    <Authentication v-show="showModalPositive === true && !this.$store.state.user.userUID" />
    
    <button class="positive-comment-button" v-show="!showModalPositive" @click="showModalPositive = true" > {{ $t('PositiveCommentSection.InputterButtonMessage')}} </button>

    <textarea v-show="showModalPositive && this.$store.state.user.userUID" class="positive-comment-textarea" type="text" minlength="5" maxlength="1000" v-model="positivecomment" />

    <div class="buttons">
      <button class="small-buttons" v-show="showModalPositive && this.$store.state.user.userUID" @click="submitPositiveComment(), (showModalPositive = false)" type="submit" > {{ $t('PositiveCommentSection.InputterSubmitButton')}} </button>
      <button class="small-buttons" v-show="showModalPositive && this.$store.state.user.userUID" @click="showModalPositive = false" > {{ $t('PositiveCommentSection.InputterCloseButton')}} </button>
    </div>
  </div>
</template>

<script>
import { fireDB } from "@/plugins/firebaseConfig.js";
export default {
  props: { 
    country: { type: String, required: true }, 
    dbcode: { type: String, required: true } 
  },
  data() {
    return {
      showModalPositive: false,
      positivecomment: "",
    };
  },
  methods: {
    submitPositiveComment() {
      if (this.positivecomment.length < 2) {
  
      } else if (this.$store.state.user.userUID) {
        
        fireDB.collection(this.country).doc(this.dbcode).collection("positiveComments")
          .add({
            positivecomment: this.positivecomment,
            like: 0,
            likedBy: [this.$store.state.user.userUID],
          })
          .then(function (data) {
            console.log("Document successfully written!", data);
          })
          .catch(function (error) {
            console.error("Error writing document: ", error);
          });
        this.positivecomment = "";
        this.showModalPositive = false;
      } 
    },
  },
};
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
  border: 1px silver solid;

  padding: 20px;
  font-family: inherit;
  font-size: 1em;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 5px 5px 19px #a6a6a6, -5px -5px 19px #ffffff;
  &:focus {
    outline: none;
    border: gray 1px solid;
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
