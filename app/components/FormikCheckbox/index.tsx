import React from 'react';
import { Field } from 'formik';
import * as C from './styles';

type Props = {
    label: string;
    name: string;
    options: [key: string, value: string][] | string[][];
}

export function FormikCheckbox({ label, name, options }: Props) {
    return (
        <C.Container>
            <h2>{label}</h2>
            <C.CheckboxContainer>
                {
                    options.map(option => (
                        <div className="checkbox" key={option[1]}>
                            <Field type="checkbox" name={name} id={option[1]} value={option[1]} />
                            <label className="input" htmlFor={option[1]}><div /></label>
                            <label htmlFor={option[1]}>{option[0]}</label>
                        </div>
                    ))
                }
            </C.CheckboxContainer>
        </C.Container>
    )
}
