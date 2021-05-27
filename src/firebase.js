import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAkvKREUK4OkYQ92DWtp_JiZ-EEdrAO0YQ",
  authDomain: "skripsi-form.firebaseapp.com",
  projectId: "skripsi-form",
  storageBucket: "skripsi-form.appspot.com",
  messagingSenderId: "672272971129",
  appId: "1:672272971129:web:d0f50a071b282b593aaba8",
  measurementId: "G-QB0SYRXZ68",
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const analytics = firebase.analytics();
