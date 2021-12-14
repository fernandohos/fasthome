import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut
} from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { auth, db } from '../services/firebase';
import Router from 'next/router';

export default function useAuth() {

    const signIn = async (email: string, password: string) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            Router.push('/');
        }
        catch (e) {
            console.log(e);
        }
}   

    const signUp = async (email: string, password: string, name: string) => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
            const ref = collection(db, "users");
            await addDoc(ref, {
                email: user.user.email,
                name,
                photoUrl: '',
                province: '',
                district: '',
                mobileNumber: '',
                mobileNumber2: '',
                telephone: '',
                address: '',
            })
        }
        catch (error) {
            throw (error);
        }
    }

    const signUpWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const user = await signInWithPopup(auth, provider);
            const ref = collection(db, 'users');
            await addDoc(ref, {
                name: user.user.displayName,
                email: user.user.email,
                photoUrl: user.user.photoURL,
                province: '',
                district: '',
                mobileNumber: '',
                mobileNumber2: '',
                telephone: '',
                address: '',
            });
        }
        catch (err) {
            throw (err);
        }
    }

    const logOut = async () => {
        signOut(auth);
    }

    return {
        logOut,
        signIn,
        signUp,
        signUpWithGoogle
    }
}