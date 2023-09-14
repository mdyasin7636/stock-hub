import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB6aZ3v4wdJD_A-_RYTvm98_dkoxEpH5OA",
  authDomain: "inventory-management-ce852.firebaseapp.com",
  projectId: "inventory-management-ce852",
  storageBucket: "inventory-management-ce852.appspot.com",
  messagingSenderId: "921412553486",
  appId: "1:921412553486:web:4e0ffdd1f0a72126c3e55f",
  measurementId: "G-4C73D712D5"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
