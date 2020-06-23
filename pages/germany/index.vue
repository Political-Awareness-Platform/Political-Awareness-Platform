<template>
  <div class="country-page-container">
    <div class="country-info">
      <div class="country-flag">
        <img src="~assets/flags/de.svg" />
      </div>
      <div class="country-numbers">
        <p><b>Anzahl der aktiven Parteien :</b> 51</p>
        <br />
        <p><b>Anzahl der Parteien im Parlament :</b> 14</p>
        <br />
        <p><b>Anzahl der Wahlen :</b> 61,675,529</p>
        <br />
        <p><b>Prozentsatz der Wahlbeteiligung :</b> 84.11</p>
      </div>
    </div>

    <div style="margin:20px 0px; text-align: center;">
      <h1><b>die Parteien</b></h1>
    </div>
    <section class="party-card-section">
      <div v-for="party in parties" :key="party.party_name" class="party-card">
        <nuxt-link :to="party.link">
          <b>{{ party.party_name }}</b>
        </nuxt-link>
      </div>
    </section>

    <div style="margin:20px 0px; text-align: center;">
      <h1><b>Ideale Party</b></h1>
    </div>
    <section class="comment-section">
      <div class="positive-comment-section">
        <TheTopList
          headerTitle="Die meisten wollten 5 Dinge"
          :toplistcomments="positivecommentListTop"
        />
        <button
          class="niceButton"
          @click="
            ;(showModalPositive = true),
              (showModalPositiveButton = !showModalPositiveButton)
          "
          v-if="showModalPositiveButton"
        >
          Was möchten Sie von einer Party tun?
        </button>
        <transition name="fade" appear>
          <div class="modal-positive" v-if="showModalPositive">
            <textarea
              style="width:100%;height: 100px;"
              type="text"
              minlength="5"
              maxlength="1000"
              placeholder="Was möchten Sie von einer Party tun??"
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
        <ThePositiveCommentList
          headerTitle="Dinge, die eine Partei tun muss"
          :positivecommentlist="positivecommentList" :partyDetails="partyDetails"
        />
      </div>

      <div class="negative-comment-section">
        <TheTopList
          headerTitle="Top 5 vermeiden zu tun"
          :toplistcomments="negativecommentListTop"
        />

        <button
          class="niceButton"
          @click="
            ;(showModalNegative = true),
              (showModalNegativeButton = !showModalNegativeButton)
          "
          v-if="showModalNegativeButton"
        >
Was soll eine Partei vermeiden?        </button>
        <transition name="fade" appear>
          <div class="modal-negative" v-if="showModalNegative">
            <textarea
              style="width:100%;height: 100px;"
              type="text"
              placeholder="Was soll eine Partei vermeiden?"
              v-model="negativecomment"
            />
            <button
              style="padding:10px;"
              type="submit"
              minlength="5"
              maxlength="1000"
              @click="submitNegativeComment"
            >
              Senden
            </button>

            <button
              class="niceButton"
              @click="
                ;(showModalNegative = false), (showModalNegativeButton = true)
              "
            >
              Schließen
            </button>
          </div>
        </transition>
        <TheNegativeCommentList
          headerTitle="Dinge, die vermieden werden sollten"
          :negativecommentlist="negativecommentList" :partyDetails="partyDetails"
        />
      </div>
    </section>
  </div>
</template>

<script>
import firebase, { firestore } from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-functions'
import TheTopList from '@/components/TheTopList'
import ThePositiveCommentList from '@/components/ThePositiveCommentList'
import TheNegativeCommentList from '@/components/TheNegativeCommentList'
export default {
  components: { TheTopList, ThePositiveCommentList, TheNegativeCommentList },
  data() {
    return {
      partyDetails: {
        ulke: 'germany',
        dbcode: 'imaginary',
      },
      showModalPositive: false,
      showModalNegative: false,
      showModalPositiveButton: true,
      showModalNegativeButton: true,
      showModalNegative: false,
      positivecommentList: [],
      positivecommentListTop: [],
      positivecomment: '',
      negativecommentList: [],
      negativecommentListTop: [],
      negativecomment: '',
      parties: [
        {
          party_name: 'Christian Democratic Union of Germany',
          link: '/germany/ChristianDemocraticUnionofGermany'
        },
        {
          party_name: 'Social Democratic Party of Germany',
          link: '/germany/SocialDemocraticPartyofGermany'
        },
        {
          party_name: 'Alternative for Germany',
          link: '/germany/AlternativeforGermany'
        },
        {
          party_name: 'Free Democratic Party',
          link: '/germany/FreeDemocraticParty'
        },
        {
          party_name: 'The Left',
          link: '/germany/TheLeft'
        }
      ]
    }
  },
  async fetch() {
    this.positivecommentList = await firebase
      .firestore()
      .collection('germany')
      .doc('imaginary')
      .collection('positiveComments')
      .onSnapshot(snapshot => {
        this.positivecommentList = []
        this.positivecommentListTop = []

        snapshot.forEach(doc => {
          this.positivecommentList.push({ id: doc.id, doc: doc.data() })
          this.positivecommentListTop.push({ id: doc.id, doc: doc.data() })
        })
        console.log(this.positivecommentList)
        this.positivecommentListTop = this.positivecommentListTop
          .sort((a, b) => b.doc.like - a.doc.like)
          .slice(0, 5)
      })

    this.negativecommentList = await firebase
      .firestore()
      .collection('germany')
      .doc('imaginary')
      .collection('negativeComments')
      .onSnapshot(snapshot => {
        this.negativecommentList = []
        this.negativecommentListTop = []
        snapshot.forEach(doc => {
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
    submitPositiveComment() {
      if (this.$store.state.userUID) {
        firebase
          .firestore()
          .collection('germany')
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
          .collection('germany')
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
    align-items: stretch;
    overflow: auto;
    // white-space: nowrap;

    .party-card {
      margin: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      border-radius: 10px;
      text-align: center;
      box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
      a {
        text-decoration: none;
      }
    }
  }

  .comment-section {
    margin-top: 1em;
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
      .comment-list {
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

      .comment-list {
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
.comment-list li {
  // padding: 20px;
  // margin: 10px auto;
  // list-style-type: none;
  // background: white;
  // border-radius: 10px;
  // box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
  // display: flex;
  // justify-content: space-between;
}
.comment-list .votes {
  // position: relative;
  // top: -5px;
  // z-index: 0;
}
.comment-list .upvote {
  // cursor: pointer;
  // border-radius: 50%;
}
.comment-list .upvote:active {
  // color: black;
  // background: #ffe100;
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
