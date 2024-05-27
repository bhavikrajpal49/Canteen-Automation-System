import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "EnterYourApiKey",
    authDomain: "authDomain",
    projectId: "yourprjid",
    storageBucket: "yourbucketName",
    messagingSenderId: "yourNo",
    appId: "yourId",
    measurementId: "yourDetails"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);


export { app, firestore, storage};
