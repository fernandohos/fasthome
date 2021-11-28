import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import * as C from './styles';
import {ButtonStyleType} from '../../types/ButtonStyleType';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    buttonStyleType?: ButtonStyleType;
}

export function Button({ children, ...props }: ButtonProps) {
    return (
        <C.Button {...props}>
            {children}
        </C.Button>
    )
}
