import * as firebase from "firebase/compat";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDRmGGcabCaQJTH_Gi-nPcPJuBDlStbmZc",
  authDomain: "assignment2-cbcce.firebaseapp.com",
  projectId: "assignment2-cbcce",
  storageBucket: "assignment2-cbcce.appspot.com",
  messagingSenderId: "925616308548",
  appId: "1:925616308548:web:c240b591ea291258bed711",
};

let app;
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage, firebase };
