import logo from '../public/images/Logo.svg';
import Image from 'next/image';
import * as C from '../app/styles/404';

export default function Custom404() {
    return (
        <C.Container>
            <C.Title>404</C.Title>
            <C.Separator />
            <p>page not found</p>
            <C.Logo>
                <Image src={logo} layout="fill" alt="fasthome logo" />
            </C.Logo>
        </C.Container>
    )
}