import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA2VCrK-_uYjRVOdLTdNkoqJYQSGp2aF9g",
  authDomain: "smoothies-6a3d3.firebaseapp.com",
  databaseURL: "https://smoothies-6a3d3.firebaseio.com",
  projectId: "smoothies-6a3d3",
  storageBucket: "smoothies-6a3d3.appspot.com",
  messagingSenderId: "197999608780",
  appId: "1:197999608780:web:c032854b01a5b3fb7a9369"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//firebaseApp.firestore().settings({ timestampsInSnapshots: true });
export default firebaseApp.firestore();
