import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export const registerUser = async (email, password) => {
    const createUser = await createUserWithEmailAndPassword(auth, email, password);
    return createUser;
};

export const signInUser = async (email, password) => {
    const signInUser = await signInWithEmailAndPassword(auth, email, password);
    return signInUser;
}

export const signOutUser = () => {
    return auth.signOut();
}