import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUUxh-47nOihwcMLv6VqvaJX0yrILMjj8",
    authDomain: "devblock-5fa11.firebaseapp.com",
    projectId: "devblock-5fa11",
    storageBucket: "devblock-5fa11.appspot.com",
    messagingSenderId: "400332606954",
    appId: "1:400332606954:web:9c10f8acea82bc95feb693"
  };
const app = initializeApp(firebaseConfig);

// google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((err) => {
        console.log(err)
    })

    return user;
}