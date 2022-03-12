import logo from '@images/Logo.svg';
import Image from 'next/image';
import * as C from '@styles/404';
import Head from 'next/head';

export default function Custom404() {
    return (
        <C.Container>
            <Head>
                <title>404 | Not found</title>
            </Head>
            <C.Title>404</C.Title>
            <C.Separator />
            <p>page not found</p>
            <C.Logo>
                <Image src={logo} layout="fill" alt="fasthome logo" />
            </C.Logo>
        </C.Container>
    )
}