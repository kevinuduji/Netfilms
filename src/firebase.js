import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
    createUserWithEmailAndPassword, 
    getAuth,
    signOut,
    signInWithEmailAndPassword } from "firebase/auth";
import {
    collection,
    addDoc,
    getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6Gzjgg0PHv9QEukzYBVXu55CUVVoQoq0",
  authDomain: "netfilms-c93e0.firebaseapp.com",
  projectId: "netfilms-c93e0",
  storageBucket: "netfilms-c93e0.appspot.com",
  messagingSenderId: "514770431098",
  appId: "1:514770431098:web:1678b68201e78e16e15fc3",
  measurementId: "G-C2QTF5J1NE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        // storing user details in firestore
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
            // password
        });
        toast.success("Account created successfully");
    }
    catch(error){
        console.log(error);
        toast.error(error.code.split("/")[1].split("-").join(" ").toLowerCase());
    }
}

const login = async (email, password) => {
    try{
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Logged in successfully");
    }
    catch(error){
        console.log(error);
        toast.error(error.code.split("/")[1].split("-").join(" ").toLowerCase());
    }
}

const logout = () => {
    signOut(auth);
    toast.success("Logged out successfully");
}

export { auth, db, signUp, login, logout }