import React, { InputHTMLAttributes, Dispatch } from 'react';
import * as C from './styles';

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

type Props = {
    label: string;
    value: string;
    dispatch: Dispatch<Action>;
    type: ActionTypes;
    input: InputHTMLAttributes<HTMLInputElement>;
}

export function Input({ type, value, label, dispatch, input }: Props) {
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