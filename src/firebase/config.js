import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAe9TBadkk_63uZLOfWiLppG3KR1HFrvkM",
  authDomain: "quiz-app-bb362.firebaseapp.com",
  projectId: "quiz-app-bb362",
  storageBucket: "quiz-app-bb362.appspot.com",
  messagingSenderId: "82030942999",
  appId: "1:82030942999:web:f876891cb885a6424e7552"
};

export const app = initializeApp(firebaseConfig);