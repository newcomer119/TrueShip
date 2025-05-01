import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCcq6UC05RB8jBPIz3yBBJtaQ4Iv7c5zJI",
  authDomain: "trueship-38cc1.firebaseapp.com",
  projectId: "trueship-38cc1",
  storageBucket: "trueship-38cc1.firebasestorage.app",
  messagingSenderId: "523478044181",
  appId: "1:523478044181:web:affa79400a787bf863881c",
  measurementId: "G-Y5Q9F6EJ5M"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);