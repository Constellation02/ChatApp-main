import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';

const firebaseConfig = {
  apiKey: "AIzaSyBTJWtbo_08shrWYrC3v4p-1C12Z1-iMKo",
  authDomain: "muro-cfb8d.firebaseapp.com",
  projectId: "muro-cfb8d",
  storageBucket: "muro-cfb8d.appspot.com",
  messagingSenderId: "1017353722714",
  appId: "1:1017353722714:web:50935d698c4db4fa453163"
};

initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();