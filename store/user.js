import { fireAuth } from '~/plugins/firebaseConfig'

export const state = () => ({
  userUID: null
})

export const mutations = {
  setUser(state, userUID) {
    state.userUID = userUID
  },
  clearUser(state) {
    state.userUID = null;
  }
}
export const actions = {
  createUser(vuexContext, userdata) {
    fireAuth.createUserWithEmailAndPassword(userdata.email, userdata.password)
      .then( data => vuexContext.commit('setUser', data.user.uid) )
      .catch( e => console.log(e) )
  },
  loginUser(vuexContext, userdata) {
    fireAuth.signInWithEmailAndPassword(userdata.email, userdata.password)
      .then( data => {
        vuexContext.commit('setUser', data.user.uid)
        window.location.hostname === 'localhost' ? console.info("🤓 logged in") : "";
      })
      .catch(e => console.log(e) )
  },
  anonymousUser(vuexContext) {
    fireAuth.signInAnonymously()
      .then(data => {
        vuexContext.commit('setUser', data.user.uid)
        window.location.hostname === 'localhost' ? console.info("anonymousUser logged in by VuexStore") : "";
      })
      .catch(e => console.log(e) )
  },
  UserSignedOut(vuexContext) {
    vuexContext.commit('clearUser')
    window.location.hostname === 'localhost' ? console.info("🤓 User Signed Out") : "";
  },
}
