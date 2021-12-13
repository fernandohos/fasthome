import {
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';
import {collection, addDoc} from 'firebase/firestore';
import { auth, db } from '../services/firebase';

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