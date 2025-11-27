import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBd143hRq9vh-fdDRu6Buucshz5aFQYVC4",
  authDomain: "grenshop-d6ae2.firebaseapp.com",
  projectId: "grenshop-d6ae2",
  storageBucket: "grenshop-d6ae2.firebasestorage.app",
  messagingSenderId: "420096731018",
  appId: "1:420096731018:web:9a6c8168cbddc6119e4a73",
  measurementId: "G-ZXDGCFJMGL",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};
export const registerWithGoogle = () => {
  return signInWithPopup(auth, provider);
};
