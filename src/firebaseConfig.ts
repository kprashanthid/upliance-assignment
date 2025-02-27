import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVdzZXhNSo7YbPOrp9VqJz1PNDUpk5-Do",
  authDomain: "upliance-assignment-3eb74.firebaseapp.com",
  projectId: "upliance-assignment-3eb74",
  storageBucket: "upliance-assignment-3eb74.firebasestorage.app",
  messagingSenderId: "987006112411",
  appId: "1:987006112411:web:4ad42e2cc36cca9d7e6c3e",
  measurementId: "G-H7GRZE5Y9M",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
