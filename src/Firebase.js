import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const configApp = initializeApp({
apiKey: "AIzaSyA-_xYBlefpYjDFpa3eyXUXTAIynfjCKcw",
authDomain: "userimage-fa88e.firebaseapp.com",
projectId: "userimage-fa88e",
storageBucket: "userimage-fa88e.appspot.com",
messagingSenderId: "828779399998",
appId: "1:828779399998:web:f5ad43cf372bfc15fffa6f"
});

const db = getFirestore(configApp);

export default db;
