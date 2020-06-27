<template>
  <div class="single-party-page">
    <div class="party-intro">
      <div class="party-details">
        <p><b>Adi : </b>{{ partyDetails.adi }}</p>
        <p><b>Kisalmasi : </b>{{ partyDetails.kisaltmasi }}</p>
        <p><b>Kurulus tarihi : </b>{{ partyDetails.kurulus_tarihi }}</p>
        <p><b>Kurucu lider : </b>{{ partyDetails.kurucu_lider }}</p>
        <p><b>Fiziksek adresi : </b>{{ partyDetails.adresi }}</p>
        <p><b>Internet adresi : </b>{{ partyDetails.internet_adresi }}</p>
        <p><b>Telefon numarasi : </b>{{ partyDetails.iletisim_sozcusu }}</p>
        <p><b>Genel baskani : </b>{{ partyDetails.genel_baskan }}</p>
        <p><b>Iletisim sozcusu : </b>{{ partyDetails.iletisim_sozcusu }}</p>
        <p><b>Guncel Uye sayisi : </b>{{ partyDetails.guncel_uye_sayisi }}</p>
        <p><b>Facebook : </b>{{ partyDetails.facebook }}</p>
        <p><b>Twitter : </b>{{ partyDetails.twitter }}</p>
      </div>
    </div>
    <div style="margin-top:2em;">
      <h1 style="text-align:center;">Kurulus Amaci</h1>
    </div>
    <div
      class="party-purpose"
      v-for="amac in partyDetails.kurulus_amaci"
      :key="amac.index"
    >
      <p> {{ amac }}</p>
    </div>

    <div class="comment-section">
      <div class="positive-section">
        <h1 style=" margin: 1em auto;">
          En iyi yaptigi 5 sey
        </h1>
        <ul class="comment-list">
          <li v-for="tpc in cpositivecommentListTop" :key="tpc.id">
            <span class="text">{{ tpc.doc.positivecomment }}</span>
            <div>
              <span class="votes">{{ tpc.doc.like }}</span>
            </div>
          </li>
        </ul>
        <button
          class="form-opener-button"
          @click="
            ;(showModalPositive = true),
              (showModalPositiveButton = !showModalPositiveButton)
          "
          v-if="showModalPositiveButton"
        >
          Bu partinin yaptigi guzel seyler nelerdir?
        </button>
        <transition name="fade" appear>
          <div class="comment-input-section" v-if="showModalPositive">
            <textarea
              class="comment-text-area"
              type="text"
              minlength="5"
              maxlength="1000"
              placeholder="Bir partiden ne yapmasini isterdiniz?"
              v-model="positivecomment"
            />
            <button
              class="input-submit-button"
              type="submit"
              @click="submitPositiveComment"
            >
              Gonder
            </button>

            <button
              class="comment-section-close-button"
              @click="
                ;(showModalPositive = false), (showModalPositiveButton = true)
              "
            >
              Kapat
            </button>
          </div>
        </transition>
        <h1 style=" margin: 1em auto;">
          Pozitif yorumlar
        </h1>
        <ul class="comment-list">
          <li
            v-for="pc in cpositivecommentList"
            :key="pc.id"
            @dblclick="upvoteapositivecomment(pc.id)"
          >
            <span class="text">{{ pc.doc.positivecomment }}</span>
            <div>
              <span class="votes">{{ pc.doc.like }}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="negative-section">
        <h1 style=" margin: 1em auto;">
          En kotu yaptigi 5 sey
        </h1>
        <ul class="comment-list">
          <li v-for="tnc in cnegativecommentListTop" :key="tnc.id">
            <span class="text">{{ tnc.doc.negativecomment }}</span>
            <div>
              <span class="votes">{{ tnc.doc.like }}</span>
            </div>
          </li>
        </ul>
        <button
          class="form-opener-button"
          @click="
            ;(showModalNegative = true),
              (showModalNegativeButton = !showModalNegativeButton)
          "
          v-if="showModalNegativeButton"
        >
          Bu partinin kotu yaptigi kotu sey nedir?
        </button>
        <transition name="fade" appear>
          <div class="comment-input-section" v-if="showModalNegative">
            <textarea
              class="comment-text-area"
              type="text"
              minlength="5"
              maxlength="1000"
              placeholder="Bir partiden ne yapmamasini isterdiniz?"
              v-model="negativecomment"
            />
            <button
              class="input-submit-button"
              type="submit"
              @click="submitNegativeComment"
            >
              Gonder
            </button>

            <button
              class="comment-section-close-button"
              @click="
                ;(showModalNegative = false), (showModalNegativeButton = true)
              "
            >
              Kapat
            </button>
          </div>
        </transition>
        <h1 style=" margin: 1em auto;">
          Negatif yorumlar
        </h1>
        <ul class="comment-list">
          <li
            v-for="nc in cnegativecommentList"
            :key="nc.id"
            @dblclick="upvoteanegativecomment(nc.id)"
          >
            <span class="text">{{ nc.doc.negativecomment }}</span>
            <div>
              <span class="votes">{{ nc.doc.like }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import firebase, { firestore } from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-functions'
export default {
  name: 'party',
  props: ['partyDetails'],
  data() {
    return {
      logo: '~/assets/logo/deva_logo.svg',
      showModalPositive: false,
      showModalNegative: false,
      showModalPositiveButton: true,
      showModalNegativeButton: true,
      positivecomment: '',
      negativecomment: '',
      cpositivecommentList: [],
      cpositivecommentListTop: [],
      cnegativecommentList: [],
      cnegativecommentListTop: []
    }
  },
  async fetch() {
    this.cpositivecommentList = await firebase
      .firestore()
      .collection(this.partyDetails.ulke)
      .doc(this.partyDetails.dbcode)
      .collection('positiveComments')
      .onSnapshot(snapshot => {
        this.cpositivecommentList = []
        this.cpositivecommentListTop = []

        snapshot.forEach(doc => {
          this.cpositivecommentList.push({ id: doc.id, doc: doc.data() })
          this.cpositivecommentListTop.push({ id: doc.id, doc: doc.data() })
        })
        console.log(this.cpositivecommentList)
        this.cpositivecommentListTop = this.cpositivecommentListTop
          .sort((a, b) => b.doc.like - a.doc.like)
          .slice(0, 5)
      })

    this.cnegativecommentList = await firebase
      .firestore()
      .collection(this.partyDetails.ulke)
      .doc(this.partyDetails.dbcode)
      .collection('negativeComments')
      .onSnapshot(snapshot => {
        this.cnegativecommentList = []
        this.cnegativecommentListTop = []
        snapshot.forEach(doc => {
          this.cnegativecommentList.push({ id: doc.id, doc: doc.data() })
          this.cnegativecommentListTop.push({ id: doc.id, doc: doc.data() })
        })
        console.log(this.cnegativecommentList)
        this.cnegativecommentListTop = this.cnegativecommentListTop
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
          .collection(this.partyDetails.ulke)
          .doc(this.partyDetails.dbcode)
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
    upvoteapositivecomment(commentID) {
      const likeapositivecomment = firebase
        .functions()
        .httpsCallable('likeapositivecomment')
      likeapositivecomment({
        commentID: commentID,
        commentCountry: this.partyDetails.ulke,
        commentPartyDBCode: this.partyDetails.dbcode
      }).catch(error => {
        console.log(error.message)
      })
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
.single-party-page {
  margin: 1em;

  .party-intro {
    display: grid;
    grid-template-columns: 1fr 2fr;

    @media only screen and (max-width: 900px) {
      grid-template-columns: auto;
    }

  }
  .party-purpose {
    margin-top: 2em;
  }

  .comment-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1em;

    @media only screen and (max-width: 900px) {
      grid-template-columns: auto;
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

.comment-text-area {
  outline: none;
  width: 100%;
  padding: 10px;
  line-height: 1.5;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px #999;
}

.form-opener-button {
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

.input-submit-button {
  padding: 6px 8px;
  background-image: linear-gradient(to right, #317223, #5dc443);
  border-radius: 8px;
  color: #fff;
  font-size: 0.8em;

  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;

  &:hover {
    box-shadow: 5px 5px rgba(0, 0, 0, 0.6);
  }
}

.comment-section-close-button {
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
</style>
