import React, { useState, useEffect, useReducer } from 'react';
import * as C from '../app/styles/signup';
import Image from 'next/image';
import { GoogleButton } from '../app/components/GoogleButton';
import { Input } from '../app/components/Input';
import { AuthLayout } from '../app/patterns/AuthLayout';

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
    const [isPasswordEqual, setIsPasswordEqual] = useState(false);

    useEffect(() => {
        setIsPasswordEqual(state.password === state.confirmPassword);
    }, [state])

    return (
        <AuthLayout>
            <GoogleButton />
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
                !isPasswordEqual && <p>passwords do not match</p>
            }
            <C.SignupButton>Sign Up</C.SignupButton>
        </AuthLayout>
    )
}
