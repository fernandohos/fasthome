import React from 'react';
import * as C from './styles';
import Image from 'next/image';
import Link from 'next/link';
import loginIcon from '../../../public/images/login-icon.svg';
import signupIcon from '../../../public/images/signup-icon.svg';
import infoIcon from '../../../public/images/info-icon.svg';

type Props = {
    initial: { opacity: number, x: number };
    animate: { opacity: number, x: number };
    exit: { opacity: number, x: number };
    transition: {
        default: { duration: number };
    }
}

export function ProfileTab({ initial, animate, exit, transition }: Props) {
    return (
        <C.Container
            initial={initial}
            animate={animate}
            exit={exit}
            transition={transition}
        >
            <Link href="/login" passHref>
                <C.Tab>
                    <div className="detail-tab-image">
                        <Image src={loginIcon} layout="fill" alt="login icon" />
                    </div>
                    Login
                </C.Tab>
            </Link>
            <Link href="/signup" passHref>
                <C.Tab>
                    <div className="detail-tab-image">
                        <Image src={signupIcon} layout="fill" alt="login icon" />
                    </div>
                    Signup
                </C.Tab>
            </Link>
            <Link href="/profile-information" passHref>
                <C.Tab>
                    <div className="detail-tab-image">
                        <Image src={infoIcon} layout="fill" alt="login icon" />
                    </div>
                    Profile information
                </C.Tab>
            </Link>
        </C.Container>
    )
}
