import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAyLFvde0kTtofPtkfASx5QED1vUoqJqKk",
  authDomain: "monetaleven-aa205.firebaseapp.com",
  projectId: "monetaleven-aa205",
  storageBucket: "monetaleven-aa205.firebasestorage.app",
  messagingSenderId: "954184729082",
  appId: "1:954184729082:web:4f25d84fa2033f0a802443",
  measurementId: "G-WXTZTV19LN"
};

// Initialize Firebase only in browser environment
let app;
let db;
let analytics;

if (typeof window !== 'undefined') {
  try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    analytics = getAnalytics(app);
    console.log('Firebase initialized');
  } catch (error) {
    console.error('Firebase initialization error:', error);
  }
}

export { db, analytics };