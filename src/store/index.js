import Vue from 'vue'
import Vuex from 'vuex'
import '@firebase/firestore'
import db from '../firebase.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    async addUser ({ commit }, user) {
      try {
        console.log('saving...')
        await db.collection('gardeners').add({
          name: user.name,
          email: user.email,
          username: user.username,
          bias: user.bias
        })
        console.log('saved')
        return 'saved'
      } catch {
        return 'error'
      }
    },
    async loadUsers ({ commit }) {
      try {
        const userList = []
        const querySnapshot = await db.collection('gardeners').get()
        querySnapshot.forEach(function (doc) {
          const user = {
            id: doc.id,
            name: doc.data().name,
            email: doc.data().email,
            username: doc.data().username,
            bias: doc.data().bias
          }
          userList.push(user)
        })
        console.log('user loaded')
        return userList
      } catch {
        return 'error'
      }
    },
    async removeUser ({ commit }, userID) {
      try {
        await db.collection('gardeners').doc(userID).delete()
        console.log('deleted')
        return 'deleted'
      } catch {
        return 'error'
      }
    }

  },
  modules: {}
})
