import React from 'react';
import { Field } from 'formik';
import * as C from './styles';

type Props = {
    label: string;
    name: string;
    options: {
        label: string;
        value: string;
    }[];
}

export function FormikCheckbox({ label, name, options }: Props) {
    return (
        <C.Container>
            <h2>{label}</h2>
            <C.CheckboxContainer>
                {
                    options.map(option => (
                        <div className="checkbox" key={option.value}>
                            <Field type="checkbox" name={name} id={option.value} value={option.value} />
                            <label className="input" htmlFor={option.value}><div /></label>
                            <label htmlFor={option.value}>{option.label}</label>
                        </div>
                    ))
                }
            </C.CheckboxContainer>
        </C.Container>
    )
}
