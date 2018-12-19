import firebase from 'firebase';

const config = {
	apiKey: "AIzaSyBpKaJtAn3qV1wODX1hNVbvETIH1SxhVSo",
  authDomain: "four-steps-2f408.firebaseapp.com",
  databaseURL: "https://four-steps-2f408.firebaseio.com",
  projectId: "four-steps-2f408",
  storageBucket: "four-steps-2f408.appspot.com",
  messagingSenderId: "536527125658"
};

firebase.initializeApp(config);
export default firebase;
