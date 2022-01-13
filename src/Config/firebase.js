import * as firebase from 'firebase'


var firebaseConfig = {
     apiKey: "",
     authDomain: "",
     databaseURL: "",
     projectId: "",
     storageBucket: "",
     messagingSenderId: "",
     appId: ""
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({
     timestampsInSnapshots: true
});
firebase.auth = firebase.auth();
firebase.db = db;
export default firebase;
