
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCgd5Qm26pkf9dwGbgaVTAZiUUOSJa_wEA",
  authDomain: "crud-clients-ac4be.firebaseapp.com",
  projectId: "crud-clients-ac4be",
  storageBucket: "crud-clients-ac4be.appspot.com",
  messagingSenderId: "641140046641",
  appId: "1:641140046641:web:2c3f48ab4ed5cddbd40e10"
};

const app = initializeApp(firebaseConfig);
export const dabaBase = getFirestore(app);