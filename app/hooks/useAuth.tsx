import { ReactNode, useEffect, useContext, createContext } from 'react';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    UserCredential
} from 'firebase/auth';
import { setDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../services/firebase';
import { useState } from 'react';
import { User } from '../types/User';
import { supabase } from '../services/supabase';
import { ApiError, Session } from '@supabase/supabase-js';

type SignUpType = (email: string, password: string, displayName: string) => Promise<{
    user: User | null;
    session: Session | null;
    error: ApiError | null;
}>

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

type AuthProviderType = {
    children: ReactNode;
}

type AuthContextType = {
    user: null | User;
    logOut: () => void;
    signIn: (email: string, password: string) => Promise<UserCredential>;
    signUp: SignUpType;
    updateUser: (uid: string, data: UpdateUser) => Promise<void>;
    signUpWithGoogle: () => Promise<UserCredential>;
}

const AuthContext = createContext({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: AuthProviderType) {
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
        return res;
    }

    const signUp: SignUpType = async (email, password, displayName) => {
        const { user: signedUser, session, error } = await supabase.auth.signUp({
            email,
            password
        }, {
            data: {
                display_name: displayName,
                photo_url: null,
                province: null,
                district: null,
                mobile_number: null,
                mobile_number_2: null,
                telephone: null,
                address: null,
            }
        });
        function getUserInfo(): User | null {
            if (signedUser) {
                const { id, created_at, email = null, user_metadata } = signedUser;
                const { mobile_number_2, photo_url, province, telephone, mobile_number, display_name, address, district } = user_metadata;
                return {
                    id,
                    created_at,
                    email,
                    mobile_number_2,
                    photo_url,
                    province,
                    telephone,
                    mobile_number,
                    display_name,
                    address,
                    district
                }
            }
            return null;
        }
        if (signedUser) {
            setUser(getUserInfo());
        }
        return { user: getUserInfo(), session, error };
    }

    const signUpWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
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
        return res;
    }

    const updateUser = async (uid: string, data: UpdateUser) => {
        const ref = doc(db, "users", uid);

        const obj = { ...data };

        Object.keys(data).filter(k => {
            const key = k as keyof UpdateUser;
            if (obj[key] === '' || obj[key] === null || obj[key] === undefined) {
                delete data[key];
            }
        })
        return await updateDoc(ref, data);
    }

    const logOut = async () => {
        signOut(auth);
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{
            user,
            logOut,
            signIn,
            signUp,
            updateUser,
            signUpWithGoogle
        }}>
            {children}
        </AuthContext.Provider>
    )
}