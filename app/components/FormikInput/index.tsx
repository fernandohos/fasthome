import React from 'react';
import { Field, useField } from 'formik';
import * as C from './styles';

type Props = {
    label: string;
    name: string;
    type: string;
    isTextarea?: boolean;
    required?: boolean;
}

export function FormikInput({ 
    label,
    name,
    type,
    isTextarea = false,
    required = false
    }: Props) {

    const [inputProps, meta] = useField(name);

    return (
        <C.Container error={!!meta.error} isEmpty={!meta.value}>
            <Field
                {...inputProps}
                id={name}
                as={isTextarea && 'textarea'}
                type={type}
                name={name}
                required={required}
                style={{resize:"vertical", height: isTextarea && 100}}
            />
            <label htmlFor={name}>
                {label}
            </label>
        </C.Container>
    )
}
