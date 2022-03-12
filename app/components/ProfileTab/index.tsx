import React from 'react';
import * as C from './styles';
import Image from 'next/image';
import Link from 'next/link';
import loginIcon from '@images/login-icon.svg';
import signupIcon from '@images/signup-icon.svg';
import infoIcon from '@images/info-icon.svg';
import logOutIcon from '@images/logout-icon.svg';
import { useAuth } from '@hooks/useAuth';

type Props = {
    initial: { opacity: number, x: number };
    animate: { opacity: number, x: number };
    exit: { opacity: number, x: number };
    transition: {
        default: { duration: number };
    }
}

export function ProfileTab({ initial, animate, exit, transition }: Props) {
    const { user, logOut } = useAuth();
    return (
        <C.Container
            initial={initial}
            animate={animate}
            exit={exit}
            transition={transition}
        >
            {!user && <Link href="/login" passHref>
                <C.Tab>
                    <div className="detail-tab-image">
                        <Image src={loginIcon} layout="fill" alt="login icon" />
                    </div>
                    Login
                </C.Tab>
            </Link>}
            {!user && <Link href="/signup" passHref>
                <C.Tab>
                    <div className="detail-tab-image">
                        <Image src={signupIcon} layout="fill" alt="login icon" />
                    </div>
                    Signup
                </C.Tab>
            </Link>}
            {user && <Link href="/profile-information" passHref>
                <C.Tab>
                    <div className="detail-tab-image">
                        <Image src={infoIcon} layout="fill" alt="login icon" />
                    </div>
                    Profile information
                </C.Tab>
            </Link>}
            {user && <C.Tab onClick={logOut}>
                <div className="detail-tab-image">
                    <Image src={logOutIcon} layout="fill" alt="logout icon" />
                </div>
                Sign out
            </C.Tab>}
        </C.Container>
    )
}
