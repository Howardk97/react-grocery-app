import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const registerUser = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const signInUser = async (email, password) => {
    const signInUser = await signInWithEmailAndPassword(auth, email, password);
    return signInUser;
}

export const signOutUser = () => {
    return auth.signOut();
}