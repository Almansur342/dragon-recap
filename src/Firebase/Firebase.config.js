
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBRYrbysrjYoq3gfDRymJPneqAxM14VIaM",
  authDomain: "dragon-recap-38a6f.firebaseapp.com",
  projectId: "dragon-recap-38a6f",
  storageBucket: "dragon-recap-38a6f.appspot.com",
  messagingSenderId: "937349252659",
  appId: "1:937349252659:web:2b2044cf64e634bc7ac546"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;