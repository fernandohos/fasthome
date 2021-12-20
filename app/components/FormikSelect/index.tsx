import React from 'react';
import { Field } from 'formik';
import * as C from './styles';

type Props<T> = {
    label: string;
    name: string;
    value: T;
    error: string | undefined;
    options: [string, string][];
    required?: boolean;
}

export function FormikSelect<T>({ label, name, value, error, required = false, options }: Props<T>) {
    return (
        <C.Container error={!!error} isEmpty={!value}>
            <Field id={name} as='select' name={name} required={required}>
                {
                    options.map((option, i) => (
                        <option key={i} value={option[1]}>
                            {option[0]}
                        </option>
                    ))
                }
            </Field>
            <label htmlFor={name}>
                {label}
            </label>
        </C.Container>
    )
}
