// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { login } from "../reducers/userSlice";
import { useDispatch } from "react-redux";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGSLCPmOw_Q4TLqm2K6-VCI-IciA34t18",
  authDomain: "gamified-ffd3a.firebaseapp.com",
  databaseURL: "https://gamified-ffd3a-default-rtdb.firebaseio.com",
  projectId: "gamified-ffd3a",
  storageBucket: "gamified-ffd3a.appspot.com",
  messagingSenderId: "763844150340",
  appId: "1:763844150340:web:cbe769df3cb53f3d686811",
  measurementId: "G-JLTMSQQBBC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Get a list of cities from your database
async function getStudents() {
  const citiesCol = collection(db, 'students');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

const provider = new GoogleAuthProvider();
const auth = getAuth();

export {getStudents, auth, provider}
export default db