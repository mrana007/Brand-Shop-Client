// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOZb1ZPHSn_tlnRDKLwlx1W6gdRcXD4CM",
  authDomain: "a10-brand-shop-client.firebaseapp.com",
  projectId: "a10-brand-shop-client",
  storageBucket: "a10-brand-shop-client.appspot.com",
  messagingSenderId: "238988467462",
  appId: "1:238988467462:web:ae43ed849b4298d4f0d287"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;