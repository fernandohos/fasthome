import React, { ReactNode } from 'react';
import * as C from './styles';

type Props = {
    children: ReactNode;
    title: string;
}

export function Fieldset({children, title}:Props) {
    return (
        <C.Container>
            <h3>{title}</h3>
            {children}
        </C.Container>
    )
}
