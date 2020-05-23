import * as firebase from 'firebase'


var firebaseConfig = {
     apiKey: "AIzaSyAh2xTl-z6UjiAicFGKFkwKxEoCh_thjZE",
     authDomain: "utnreactapp.firebaseapp.com",
     databaseURL: "https://utnreactapp.firebaseio.com",
     projectId: "utnreactapp",
     storageBucket: "utnreactapp.appspot.com",
     messagingSenderId: "371604510426",
     appId: "1:371604510426:web:3d82896e96a342ebb837e3"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({
     timestampsInSnapshots: true
});
firebase.auth = firebase.auth();
firebase.db = db;
export default firebase;
