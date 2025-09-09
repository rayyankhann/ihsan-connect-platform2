import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";

let firebaseApp: FirebaseApp | undefined;
let firestoreDb: Firestore | undefined;

export function getFirebaseApp(): FirebaseApp {
  if (firebaseApp) return firebaseApp;

  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  const authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  const storageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
  const messagingSenderId = process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID;
  const appId = process.env.NEXT_PUBLIC_FIREBASE_APP_ID;
  const measurementId = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID;

  if (!apiKey || !authDomain || !projectId || !storageBucket || !messagingSenderId || !appId) {
    throw new Error("Missing Firebase environment variables. Please set NEXT_PUBLIC_FIREBASE_* in your env file.");
  }

  const config = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId,
  };

  firebaseApp = getApps().length ? getApp() : initializeApp(config);
  return firebaseApp;
}

export function getDb(): Firestore {
  if (firestoreDb) return firestoreDb;
  firestoreDb = getFirestore(getFirebaseApp());
  return firestoreDb;
}


