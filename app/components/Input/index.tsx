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

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export function Input<T>({ label, ...input }: Props) {
    return (
        <C.Container isEmpty={!input.value}>
            <input
                {...input}
            />
            <label htmlFor={label}>{label}</label>
        </C.Container>
    )
}