import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAc-AtnrcGN2Vl_Rz1kTj_bL6XafpgyYFc",
  authDomain: "netflix-clone1328.firebaseapp.com",
  projectId: "netflix-clone1328",
  storageBucket: "netflix-clone1328.appspot.com",
  messagingSenderId: "1019219007560",
  appId: "1:1019219007560:web:088c2be817c0508ba6207d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth };
export default db;
