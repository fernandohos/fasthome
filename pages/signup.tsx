import React, { useState, useEffect, useReducer } from 'react';
import * as C from '../app/styles/signup';
import Link from 'next/link';
import { GoogleButton } from '../app/components/GoogleButton';
import { Input } from '../app/components/Input';
import { AuthLayout } from '../app/patterns/AuthLayout';
import isEmail from 'validator/lib/isEmail';
import useAuth from '../app/hooks/useAuth';

type FormType = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
}

type ReducerState = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

enum ActionTypes {
    UPDATE_NAME = 'update_name',
    UPDATE_EMAIL = 'update_email',
    UPDATE_PASSWORD = 'update_password',
    UPDATE_CONFIRM_PASSWORD = 'update_confirm_password'
}

type Action = {
    type: ActionTypes;
    payload: string;
}

function reducer(state: ReducerState, action: Action): FormType {
    switch (action.type) {
        case ActionTypes.UPDATE_NAME:
            return {
                ...state,
                name: action.payload
            };
        case ActionTypes.UPDATE_EMAIL:
            return {
                ...state,
                email: action.payload
            };
        case ActionTypes.UPDATE_PASSWORD:
            return {
                ...state,
                password: action.payload
            };
        case ActionTypes.UPDATE_CONFIRM_PASSWORD:
            return {
                ...state,
                confirmPassword: action.payload
            };
        default:
            return state;
    }
}

export default function Signup() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [inputErrors, setInputErrors] = useState({
        name: false,
        email: false,
        password: false,
        confirmPassord: false
    })
    const { signUp, signUpWithGoogle } = useAuth();

    const handleSignUp = () => {
        const { name, email, password } = state;
        console.log(isEmail(email));

        if (!isEmail(email)) {
            setInputErrors(p => ({ ...p, email: true }));
            return;
        }

        if (state.name !== '' && state.email !== '' && state.password !== '' && state.confirmPassword !== '' && state.confirmPassword === state.password) {
            signUp(email, password, name);
        }
        else {
            setInputErrors(prev => ({
                ...prev,
                name: state.name === '',
                email: state.email === '',
                password: (state.password === '' ? true : state.password === state.confirmPassword),
                confirmPassword: (state.confirmPassword === '' ? true : state.password === state.confirmPassword)
            }));
        }
    }

    return (
        <AuthLayout>
            <GoogleButton onClick={signUpWithGoogle} />
            <C.Separator>
                <div />
                <p>or</p>
                <div />
            </C.Separator>
            <Input
                label="Name"
                value={state.name}
                dispatch={dispatch}
                type={ActionTypes.UPDATE_NAME}
                input={{ type: "text" }}
            />
            <Input
                label="Email"
                value={state.email}
                dispatch={dispatch}
                type={ActionTypes.UPDATE_EMAIL}
                input={{ type: "email" }}
            />
            <Input
                label="Password"
                value={state.password}
                dispatch={dispatch}
                type={ActionTypes.UPDATE_PASSWORD}
                input={{ type: "password" }}
            />
            <Input
                label="Confirm Password"
                value={state.confirmPassword}
                dispatch={dispatch}
                type={ActionTypes.UPDATE_CONFIRM_PASSWORD}
                input={{ type: "password" }}
            />

            {
                state.password !== state.confirmPassword && <p>passwords do not match</p>
            }
            {
                inputErrors.password && state.password === '' && <p>password is empty</p>
            }
            {
                inputErrors.name && state.name === '' && <p>name is empty</p>
            }
            {
                inputErrors.email && <p>invalid email</p>
            }
            <C.SignupButton onClick={handleSignUp}>Sign Up</C.SignupButton>
            <C.LoginLink>
                <span>Alredy a member? <Link href="/login">Login now</Link>!</span>
            </C.LoginLink>
        </AuthLayout>
    )
}
