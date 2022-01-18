import React from 'react';
import { FastField, useField, ErrorMessage } from 'formik';
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
        <>
            <C.Container error={!!meta.error && meta.touched} isEmpty={!meta.value}>
                <FastField
                    {...inputProps}
                    id={name}
                    as={isTextarea && 'textarea'}
                    type={type}
                    name={name}
                    required={required}
                    style={{ resize: "vertical", height: isTextarea && 100 }}
                />
                <label htmlFor={name}>
                    {label}
                </label>
            </C.Container>
            <ErrorMessage name={name}>
                {message => (
                    <C.ErrorMessage>{message}</C.ErrorMessage>
                )}
            </ErrorMessage>
        </>
    )
}
