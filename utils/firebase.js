import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogapp-bfc7f.firebaseapp.com",
  projectId: "blogapp-bfc7f",
  storageBucket: "blogapp-bfc7f.appspot.com",
  messagingSenderId: "425652390045",
  appId: "1:425652390045:web:e20681b2bd3c862862ac74",
};

export const app = initializeApp(firebaseConfig);
