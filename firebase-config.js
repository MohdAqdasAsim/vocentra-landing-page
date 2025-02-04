import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

const apiKey = window.env.API_KEY;
const authDomain = window.env.FIREBASE_AUTH_DOMAIN;
const projectId = window.env.FIREBASE_PROJECT_ID;
const storageBucket = window.env.FIREBASE_STORAGE_BUCKET;
const messagingSenderId = window.env.FIREBASE_MESSAGING_SENDER_ID;
const appId = window.env.FIREBASE_APP_ID;

const firebaseConfig = {
    apiKey: apiKey,
    authDomain: authDomain,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to add an email to Firestore
export async function saveEmail(email) {
    try {
        await addDoc(collection(db, "early_access"), { email });
        console.log("Email saved successfully!");
    } catch (error) {
        console.error("Error saving email: ", error);
    }
}