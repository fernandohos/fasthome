import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';
import {collection, addDoc} from 'firebase/firestore';
import { auth, db } from '../services/firebase';


export const signIn = async (email: string, password: string) => {
    const res = await signInWithEmailAndPassword(auth, email, password);
    console.log(res)
}

export const signUp = async (email: string, password: string, name: string) => {
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
    catch (message) {
        throw (message);
    }
}

export const signUpWithGoogle = async () => {
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
    catch(err) {
        throw (err);
    }
}