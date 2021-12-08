import React, { ButtonHTMLAttributes } from 'react';
import Image from 'next/image';
import GoogleLogo from '../../../public/images/google-logo.svg';
import * as C from './styles';

type Props = {
    props?: ButtonHTMLAttributes<HTMLButtonElement>
}

export function GoogleButton(props: Props) {
    return (
        <C.GoogleButton {...props}>
            <div className="google-logo-container"><Image src={GoogleLogo} alt="google logo" layout="fill" /></div>
            <p>Connect with Google</p>
        </C.GoogleButton>
    )
}
