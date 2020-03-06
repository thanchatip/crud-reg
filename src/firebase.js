import {
  firebase
} from '@firebase/app'
import '@firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyDnWgPnFKEO2VDwrWX4QynoFt1fWtumlK8',
  authDomain: 'member-reg-49821.firebaseapp.com',
  databaseURL: 'https://member-reg-49821.firebaseio.com',
  projectId: 'member-reg-49821',
  storageBucket: 'member-reg-49821.appspot.com',
  messagingSenderId: '677186597387',
  appId: '1:677186597387:web:34f0a195f9927cef958d0e'
}

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
export default db
