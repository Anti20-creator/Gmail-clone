import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCxgTV766EFCrr2oyRhCY6SCKfI3Sha-VI",
    authDomain: "clone-c6c38.firebaseapp.com",
    projectId: "clone-c6c38",
    storageBucket: "clone-c6c38.appspot.com",
    messagingSenderId: "406318505406",
    appId: "1:406318505406:web:bafd0389b6ab3ebac42def",
    measurementId: "G-C02ELMQRTK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {db, auth, provider}