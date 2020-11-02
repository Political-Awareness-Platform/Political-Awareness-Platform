import Vue from 'vue'
import Vuex from 'vuex'
import {
  fireAuth
} from '~/plugins/firebaseConfig'

export const state = () => ({
  userUID: null
})

export const mutations = {
  setUser(state, userUID) {
    state.userUID = userUID
  }
}
export const actions = {
  createUser(vuexContext, userdata) {
    fireAuth
      .createUserWithEmailAndPassword(userdata.email, userdata.password)
      .then(data => {
        const userUID = data.user.uid
        vuexContext.commit('setUser', userUID)
        console.log("🤓 registered");
        // this.$router.push('/')
      })
      .catch(e => {
        console.log(e)
      })
  },
  loginUser(vuexContext, userdata) {
    fireAuth
      .signInWithEmailAndPassword(userdata.email, userdata.password)
      .then(data => {
        const userUID = data.user.uid
        vuexContext.commit('setUser', userUID)
        console.log("🤓 logged in");
        // this.$router.push('/')
      })
      .catch(e => {
        console.log(e)
      })
  },
  anonymousUser(vuexContext) {
    fireAuth
      .signInAnonymously()
      .then(data => {
        const userUID = data.user.uid
        vuexContext.commit('setUser', userUID)
        console.log("anonymousUser  logged in");
        // this.$router.push('/')
      })
      .catch(e => {
        console.log(e)
      })
  }
}
