import React, { useState } from 'react';
import { FastField, useField, ErrorMessage, Field } from 'formik';
import * as C from './styles';
import Image from 'next/image';
import visibilyIcon from '../../../public/images/visibility.svg';
import visibilyOffIcon from '../../../public/images/visibility-off.svg';

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
    const [showPassword, setShowPassword] = useState(false);

    React.useEffect(() => {
        console.log(showPassword);
    }, [showPassword])

    const Component = type === 'password' ? Field : FastField;

    return (
        <>
            <C.Container error={!!meta.error && meta.touched} isEmpty={!meta.value}>
                <Component
                    {...inputProps}
                    id={name}
                    as={isTextarea && 'textarea'}
                    type={showPassword ? 'text' : type}
                    name={name}
                    required={required}
                    style={{ resize: "vertical", height: isTextarea && 100 }}
                />
                <label htmlFor={name}>
                    {label}
                </label>
                {type === 'password' && <div onClick={e => setShowPassword(!showPassword)} className='password-icon-container'>
                    <div className='password-icon'>
                    <Image src={showPassword ? visibilyOffIcon: visibilyIcon} alt="show/hide password icon" layout="fill"/>
                    </div>
                </div>}
            </C.Container>
            <ErrorMessage name={name}>
                {message => (
                    <C.ErrorMessage>{message}</C.ErrorMessage>
                )}
            </ErrorMessage>
        </>
    )
}
