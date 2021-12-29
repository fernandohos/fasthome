import React, { ReactNode } from 'react';
import { Field, useField } from 'formik';
import * as C from './styles';

type Props = {
    children?: ReactNode;
    label: string;
    name: string;
    options: [string, string][] | string[][];
    required?: boolean;
}

export function FormikSelect({ label, name, required = false, options }: Props) {
    const [inputProps, meta] = useField(name);
    return (
        <C.Container error={!!meta.error} isEmpty={!meta.value}>
            <Field id={name} as='select' name={name} required={required}>
                <option></option>
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
