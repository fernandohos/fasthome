import React, { InputHTMLAttributes, Dispatch } from 'react';
import * as C from './styles';

enum ActionTypes {
    UPDATE_NAME = 'update_name',
    UPDATE_EMAIL = 'update_email',
    UPDATE_PASSWORD = 'update_password',
    UPDATE_CONFIRM_PASSWORD = 'update_confirm_password'
}

type Action<P> = {
    type: P;
    payload: string;
}

type Props<T> = {
    label: string;
    value: string;
    dispatch: Dispatch<Action<T>>;
    type: T;
    input: InputHTMLAttributes<HTMLInputElement>;
}

export function Input<T>({ type, value, label, dispatch, input }: Props<T>) {
    return (
        <C.Container isEmpty={!value}>
            <input 
                {...input}
                id={label} 
                onChange={e => (
                    dispatch({
                        type,
                        payload: e.target.value
                    })
                )}
                value={value}
            
            />
            <label htmlFor={label}>{label}</label>
        </C.Container>
    )
}