import React, { useReducer } from 'react';
import * as C from '../app/styles/login';
import { AuthLayout } from '../app/patterns/AuthLayout';
import { Input } from '../app/components/Input';
import { GoogleButton } from '../app/components/GoogleButton';
import Link from 'next/link';

enum ActionTypes {
    UPDATE_EMAIL = 'update_email',
    UPDATE_PASSWORD = 'update_password',
}

type StateType = {
    email: string;
    password: string;
}

type ActionType = {
    type: ActionTypes;
    payload: string;
}

function reducer(state: StateType, action: ActionType) {
    switch (action.type) {
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
        default:
            return state;
    }
}

export default function Login() {
    const [state, dispatch] = useReducer(reducer, { email: '', password: '' });

    return (
        <AuthLayout>
            <C.LoginForm>
                <GoogleButton />
                <C.Separator>
                    <div />
                    <p>or</p>
                    <div />
                </C.Separator>
                <Input
                    label="Email"
                    value={state.email}
                    dispatch={dispatch}
                    type={ActionTypes.UPDATE_EMAIL}
                    input={{ type: 'text' }}
                />
                <Input
                    label="Password"
                    value={state.password}
                    dispatch={dispatch}
                    type={ActionTypes.UPDATE_PASSWORD}
                    input={{ type: 'password' }}
                />
                <Link href="/reset-password" passHref>
                    <p className="link">I forgot my password</p>
                </Link>
                <C.LoginButton>
                    login
                </C.LoginButton>
                <p className="signup-link">Still not a member? <Link href="/signup" passHref><span className="link">Sign Up Now!</span></Link></p>
            </C.LoginForm>
        </AuthLayout>
    )
}
