import React from 'react';
import { Field } from 'formik';
import * as C from './styles';

type Props<T> = {
    label: string;
    name: string;
    type: string;
    value: T;
    error: string | undefined;
    isTextarea?: boolean;
    required?: boolean
}

export function FormikInput<T>({ label, name, type, value, error, isTextarea = false, required = false }: Props<T>) {
    return (
        <C.Container error={!!error} isEmpty={!value}>
            <Field id={name} as={isTextarea && 'textarea'} type={type} name={name} required={required} />
            <label htmlFor={name}>
                {label}
            </label>
        </C.Container>
    )
}
