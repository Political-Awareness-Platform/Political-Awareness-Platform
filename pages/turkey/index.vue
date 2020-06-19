<template>
  <div class="country-page-container">
    <div class="country-info">
      <div class="country-flag">
        <img src="~/assets/flags/tr.svg" />
      </div>
      <div class="country-numbers">
        <p><b>Faliyette olan parti sayisi :</b> 83</p>
        <br />
        <p><b>Meclisteki parti sayisi :</b> 11</p>
        <br />
        <p><b>Secmen sayisi :</b> 57.058.636</p>
        <br />
        <p><b>Secime katilim yuzdesi :</b> 84,67</p>
      </div>
    </div>

    <div style="margin:20px 0px; text-align: center;">
      <h1><b>Partiler</b></h1>
    </div>
    <section class="party-card-section">
      <div v-for="party in parties" :key="party.party_name" class="party-card">
        <nuxt-link :to="party.link">
          <b>{{ party.party_name }}</b>
        </nuxt-link>
      </div>
    </section>

    <section class="comment-section">
      <div class="positive-comment-section">
        <button
          class="niceButton"
          @click="
            ;(showModalPositive = true),
              (showModalPositiveButton = !showModalPositiveButton)
          "
          v-if="showModalPositiveButton"
        >
          Bir partiden yapmasini istediginiz sey nedir?
        </button>
        <transition name="fade" appear>
          <div class="modal-positive" v-if="showModalPositive">
            <textarea
              style="width:100%;height: 100px;"
              type="text"
              placeholder="Bir partiden ne yapmasini isterdiniz?"
              v-model="positivecomment"
            />
            <button
              style="padding:10px;"
              type="submit"
              @click="submitPositiveComment"
            >
              Gonder
            </button>

            <button
              class="niceButton"
              @click="
                ;(showModalPositive = false), (showModalPositiveButton = true)
              "
            >
              Kapat
            </button>
          </div>
        </transition>
        <h1 style=" margin: 1em auto;">
          Positive Comments
        </h1>
        <ul class="request-list">
          <li
            v-for="pc in positivecommentList"
            :key="pc.id"
            @dblclick="upvoteapositivecomment(pc.id)"
          >
            <span class="text">{{ pc.doc.positivecomment }}</span>
            <div>
              <span class="votes">{{ pc.doc.like }}</span>
              <!-- <i class="material-icons upvote">arrow_upward</i> -->
            </div>
          </li>
        </ul>
      </div>

      <div class="negative-comment-section">
        <button
          class="niceButton"
          @click="
            ;(showModalNegative = true),
              (showModalNegativeButton = !showModalNegativeButton)
          "
          v-if="showModalNegativeButton"
        >
          Bir partiden yapmamasini istediginiz sey nedir?
        </button>
        <transition name="fade" appear>
          <div class="modal-negative" v-if="showModalNegative">
            <textarea
              style="width:100%;height: 100px;"
              type="text"
              placeholder="Bir partiden ne yapmamasini isterdiniz?"
              v-model="negativecomment"
            />
            <button
              style="padding:10px;"
              type="submit"
              @click="submitNegativeComment"
            >
              Gonder
            </button>

            <button
              class="niceButton"
              @click="
                ;(showModalNegative = false), (showModalNegativeButton = true)
              "
            >
              Kapat
            </button>
          </div>
        </transition>
        <h1 style=" margin: 1em auto;">
          Negatif Yaptiklari
        </h1>
        <ul class="request-list">
          <li
            v-for="nc in negativecommentList"
            :key="nc.id"
            @dblclick="upvoteanegativecomment(nc.id)"
          >
            <span class="text">{{ nc.doc.negativecomment }}</span>
            <div>
              <span class="votes">{{ nc.doc.like }}</span>
              <!-- <i class="material-icons upvote">arrow_upward</i> -->
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import firebase, { firestore } from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-functions'
export default {
  data() {
    return {
      showModalPositive: false,
      showModalNegative: false,
      showModalPositiveButton: true,
      showModalNegativeButton: true,
      showModalNegative: false,
      positivecommentList: [],
      positivecomment: '',
      negativecommentList: [],
      negativecomment: '',
      parties: [
        {
          party_name: 'Demokrat Parti',
          link: '/turkey/demokratparti'
        },
        {
          party_name: 'Milliyetci Hareket Parti',
          link: '/turkey/milliyetcihareketparti'
        },
        {
          party_name: 'Millet Partisi',
          link: '/turkey/milletpartisi'
        }
      ]
    }
  },
  async fetch() {
    this.positivecommentList = await firebase
      .firestore()
      .collection('turkey')
      .doc('imaginary')
      .collection('positiveComments')
      .onSnapshot(snapshot => {
        this.positivecommentList = []
        snapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data())
          this.positivecommentList.push({ id: doc.id, doc: doc.data() })
        })
      })

    this.negativecommentList = await firebase
      .firestore()
      .collection('turkey')
      .doc('imaginary')
      .collection('negativeComments')
      .onSnapshot(snapshot => {
        this.negativecommentList = []
        snapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data())
          this.negativecommentList.push({ id: doc.id, doc: doc.data() })
        })
      })
  },
  fetchOnServer: false,

  methods: {
    submitPositiveComment() {
      if (this.$store.state.userUID) {
        firebase
          .firestore()
          .collection('turkey')
          .doc('imaginary')
          .collection('positiveComments')
          .add({
            positivecomment: this.positivecomment,
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
    submitNegativeComment() {
      if (this.$store.state.userUID) {
        firebase
          .firestore()
          .collection('turkey')
          .doc('imaginary')
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
    upvoteapositivecomment(commentID) {
      const likeapositivecomment = firebase
        .functions()
        .httpsCallable('likeapositivecomment')
      likeapositivecomment({
        commentID: commentID
      }).catch(error => {
        console.log(error.message)
      })
    },
    upvoteanegativecomment(commentID) {
      const likeanegativecomment = firebase
        .functions()
        .httpsCallable('likeanegativecomment')
      likeanegativecomment({
        commentID: commentID
      }).catch(error => {
        console.log(error.message)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.country-page-container {
  max-width: 1000px;
  margin: auto;
  padding: 1em;

  .country-info {
    margin-top: 20px;
    display: flex;
    flex-direction: row wrap;
    justify-content: center;
    align-items: center;

    .country-flag {
      width: 50%;
      @media only screen and (max-width: 600px) {
        width: 100%;
        margin-bottom: 10px;
      }
    }

    .country-numbers {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      @media only screen and (max-width: 600px) {
        width: 100%;
      }
    }

    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }
  }

  .party-card-section {
    display: flex;
    flex-direction: row wrap;
    justify-content: center;
    align-items: stretch;

    .party-card {
      margin: 5px;
      padding: 15px;
      border-radius: 10px;
      text-align: center;
      box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
      a {
        text-decoration: none;
      }
    }
  }

  .comment-section {
    margin-top: 3em;
    display: grid;
    grid-column-gap: 20px;
    grid-template-columns: auto auto;

    .positive-comment-section {
      margin-top: 1em;
      
      .modal-positive {
        width: 100%;
        background-color: #fff;
        border-radius: 16px;

        textarea {
          outline: none;
          width: 100%;
          padding: 10px;
          line-height: 1.5;
          border-radius: 5px;
          border: 1px solid #ccc;
          box-shadow: 1px 1px 1px #999;
        }
      }
      .request-list {
        margin: 0;
        padding: 0;
        li {
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

    .negative-comment-section {
      margin-top: 1em;

      .modal-negative {
        width: 100%;
        background-color: #fff;
        border-radius: 16px;

        textarea {
          outline: none;
          width: 100%;
          padding: 10px;
          line-height: 1.5;
          border-radius: 5px;
          border: 1px solid #ccc;
          box-shadow: 1px 1px 1px #999;
        }
      }

      .request-list {
        margin: 0;
        padding: 0;

        li {
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

    @media only screen and (max-width: 900px) {
      grid-template-columns: auto;
    }
  }

  .niceButton {
    padding: 6px 8px;
    background-image: linear-gradient(to right, #cc2e5d, #ff5858);
    border-radius: 8px;
    color: #fff;
    font-size: 0.8em;

    box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
    transition: 0.4s ease-out;

    &:hover {
      box-shadow: 5px 5px rgba(0, 0, 0, 0.6);
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1;
  }

  .fade-enter,
  .fade-leave-to {
    transition: opacity 0;
  }
}

.content {
  max-width: 800px;
  margin: 40px auto 0;
}

/* request list styles */
.request-list li {
  padding: 20px;
  margin: 10px auto;
  list-style-type: none;
  background: white;
  border-radius: 10px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
}
.request-list .votes {
  position: relative;
  top: -5px;
  z-index: 0;
}
.request-list .upvote {
  cursor: pointer;
  border-radius: 50%;
}
.request-list .upvote:active {
  color: black;
  background: #ffe100;
}

/* form element styles */
input {
  display: block;
  margin: 0px 10px 0px 0px;
  padding: 8px 2px;
  border-width: 0 0 2px 0;
  width: 100%;
}
button {
  margin-top: 5px;
  padding: 8px 12px;
  background: #ffe100;
  border: 0;
  font-weight: bold;
  font-family: inherit;
  cursor: pointer;
}
</style>
