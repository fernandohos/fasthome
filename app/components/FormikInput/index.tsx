import React from 'react';
import { Field, useField } from 'formik';
import * as C from './styles';

type Props = {
    label: string;
    name: string;
    type: string;
    isTextarea?: boolean;
    required?: boolean
}

export function FormikInput({ 
    label,
    name,
    type,
    isTextarea = false,
    required = false
    }: Props) {

    const [inputProps, meta] = useField(name);

    console.log('meta', meta);
    console.log('input props', inputProps);

    return (
        <C.Container error={!!meta.error} isEmpty={!meta.value}>
            <Field
                {...inputProps}
                id={name}
                as={isTextarea && 'textarea'}
                type={type}
                name={name}
                required={required}
            />
            <label htmlFor={name}>
                {label}
            </label>
        </C.Container>
    )
}
