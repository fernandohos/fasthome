import { ReactNode, useEffect, useContext, createContext } from 'react';
import {
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    UserCredential
} from 'firebase/auth';
import { setDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../services/firebase';
import { useState } from 'react';
import { User } from '../types/User';
import { supabase } from '../services/supabase';
import { ApiError, Session } from '@supabase/supabase-js';
import { filterUserInfo } from '../utils/filterUserInfo';

type SignUpType = (email: string, password: string, displayName: string) => Promise<{
    user: User | null;
    session: Session | null;
    error: ApiError | null;
}>

type SignInType = (email: string, password: string) => Promise<{
    user: User | null;
    session: Session | null;
    error: ApiError | null;
}>;

type UpdateUserData = {
    display_name?: string | null;
    email?: string | null;
    province?: string | null;
    district?: string | null;
    mobile_number?: string | null;
    mobile_number_2?: string | null;
    telephone?: string | null;
    address?: string | null;
}

type SignUpWithGoogleType = () => Promise<{
    user: User | null;
    session: Session | null;
    error: ApiError | null;
}>

type UpdateUserType = (data: UpdateUserData) => Promise<{
    user: User | null;
    error: ApiError | null;
}>

type AuthProviderType = {
    children: ReactNode;
}

type AuthContextType = {
    user: null | User;
    logOut: () => void;
    signIn: SignInType;
    signUp: SignUpType;
    updateUser: UpdateUserType;
    signUpWithGoogle: SignUpWithGoogleType;
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

                    //     setUser({
                    //         // id,
                    //         // displayName,
                    //         email,
                    //         // photoURL,
                    //         province,
                    //         district,
                    //         mobileNumber,
                    //         mobileNumber2,
                    //         telephone,
                    //         address
                    //     });
                }
            }
        })
        return unsub;
    }, []);

    const signIn = async (email: string, password: string) => {
        const { user: signedUser, session, error } = await supabase.auth.signIn({
            email,
            password,
        })
        setUser(filterUserInfo(signedUser));
        return { user: filterUserInfo(signedUser), session, error }
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
        if (signedUser) {
            setUser(filterUserInfo(signedUser));
        }
        return { user: filterUserInfo(signedUser), session, error };
    }

    const signUpWithGoogle = async () => {
        const { user: signedUser, session, error } = await supabase.auth.signIn({
            provider: 'google',
        })
        setUser(filterUserInfo(signedUser));
        return { user: filterUserInfo(signedUser), session, error };
    }

    const updateUser = async (data: UpdateUserData) => {
        const { email, ...restData } = data;

        const { user: signedUser, error } = await supabase.auth.update({
            email: email ?? undefined,
            data: { ...restData },
        });

        if (signedUser) {
            setUser(filterUserInfo(signedUser));
        }

        return { user: filterUserInfo(signedUser), error };
    }

    const logOut = async () => {
        supabase.auth.signOut();
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