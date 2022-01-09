import { useEffect, useRef } from 'react';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import { setDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../services/firebase';
import Router from 'next/router';
import { useState } from 'react';
import { User } from '../types/User';

type UpdateUser = {
    displayName?: string | null;
    email?: string | null;
    province?: string | null;
    district?: string | null;
    mobileNumber?: string | null;
    mobileNumber2?: string | null;
    telephone?: string | null;
    address?: string | null;
}

export default function useAuth() {
    const user = useRef<null | User>(null);
    const mountedRef = useRef(true);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async currentUser => {
            if (currentUser?.uid) {
                const ref = doc(db, "users", currentUser.uid);

                const userDoc = await getDoc(ref);

                const data = userDoc.data();

                if (data) {
                    const { uid, displayName, email, photoURL, province, district, mobileNumber, mobileNumber2, telephone, address } = data;

                    user.current = {
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
                    };
                }
            }
        })
        return () => {
            mountedRef.current = false;
            unsub();
        };
    }, [])

    const signIn = async (email: string, password: string) => {
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            const { displayName, email: userEmail, photoURL, uid } = res.user;
            user.current = ({
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
            user.current = newUser;
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
            user.current = (newUser);
            Router.push('/');
        }
        catch (err) {
            throw (err);
        }
    }

    const updateUser = async (uid: string, data: UpdateUser) => {
        const ref = doc(db, "users", uid);

        const obj = {...data};

        Object.keys(data).filter(k => {
            const key = k as keyof UpdateUser;
            if(obj[key] === '' || obj[key] === null || obj[key] === undefined) {
                delete data[key];
            }
        })

        try {
            const respoea = await updateDoc(ref, data);
            console.log(respoea);
        }
        catch(error) {
            console.log(error);
        }
    }

    const logOut = async () => {
        signOut(auth);
        user.current = (null);
    }

    return {
        user,
        logOut,
        signIn,
        signUp,
        updateUser,
        signUpWithGoogle
    }
}