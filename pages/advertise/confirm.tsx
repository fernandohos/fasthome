import React from 'react';
import { FormNavBar } from '../../app/patterns/FormNavBar';
import { Header } from '../../app/patterns/Header';
import * as C from '../../app/styles/confirm';
import confirmIcon from '../../public/images/confirm-icon.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../app/components/Button';
import Head from 'next/head';

export default function Confirm() {
    return (
        <>
            <Header />
            <FormNavBar />
            <C.Container>
                <Head>
                    <title>Fasthome | Published ad</title>
                </Head>
                <div className="icon-container">
                    <Image src={confirmIcon} layout="fill" alt="confirm icon" />
                </div>
                <p>Your ad has been published succesfully.</p>
                <p>We Thank you.</p>
                <Link href="/" passHref><a><Button style={{marginTop: '2rem'}}>Go Home</Button></a></Link>
            </C.Container>
        </>
    )
}
