import { useEffect } from 'react';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../services/firebase';
import Router from 'next/router';
import { useState } from 'react';
import { User } from '../types/User';

export default function useAuth() {
    const [user, setUser] = useState<null | User>(null);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async currentUser => {
            if (currentUser?.uid) {
                const ref = doc(db, "users", currentUser.uid);

                const userDoc = await getDoc(ref);

                const data = userDoc.data();

                if (data) {
                    const { uid, displayName, email, photoURL, province, district, mobileNumber, mobileNumber2, telephone, address } = data;

                    setUser({
                        uid,
                        displayName,
                        email,
                        photoURL,
                        province,
                        district,
                        mobileNumber,
                        mobileNumber2,
                        telephone,
                        address
                    });
                }
            }
        })
        return unsub;
    }, [])

    const signIn = async (email: string, password: string) => {
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            const { displayName, email: userEmail, photoURL, uid } = res.user;
            setUser({
                uid,
                displayName,
                email: userEmail,
                photoURL,
                province: null,
                district: null,
                mobileNumber: null,
                mobileNumber2: null,
                telephone: null,
                address: null,
            });
            Router.push('/');
        }
        catch (error) {
            throw error
        }
    }

    const signUp = async (email: string, password: string, displayName: string) => {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            console.log('res on signup', res);
            const { email: userEmail, photoURL, uid } = res.user;
            const newUser = {
                uid,
                displayName,
                email: userEmail,
                photoURL,
                province: null,
                district: null,
                mobileNumber: null,
                mobileNumber2: null,
                telephone: null,
                address: null,
            }
            const ref = doc(db, "users", uid);
            await setDoc(ref, newUser)
            setUser(newUser);
            Router.push('/');
        }
        catch (error) {
            throw (error);
        }
    }

    const signUpWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const res = await signInWithPopup(auth, provider);
            const { displayName, email: userEmail, photoURL, uid } = res.user;
            const newUser = {
                uid,
                displayName,
                email: userEmail,
                photoURL,
                province: null,
                district: null,
                mobileNumber: null,
                mobileNumber2: null,
                telephone: null,
                address: null,
            }
            const ref = doc(db, 'users', uid);
            await setDoc(ref, newUser);
            setUser(newUser);
            Router.push('/');
        }
        catch (err) {
            throw (err);
        }
    }

    const logOut = async () => {
        signOut(auth);
        setUser(null);
    }

    return {
        user,
        logOut,
        signIn,
        signUp,
        signUpWithGoogle
    }
}