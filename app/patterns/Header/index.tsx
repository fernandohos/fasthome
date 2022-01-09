import React, { useEffect, useState } from 'react';
import * as C from './styles';
import Image from 'next/image';
import logo from '../../../public/images/Logo.svg';
import { Nav } from '../../components/Nav';
import { AnimatePresence } from 'framer-motion';
import defaultProfileImage from '../../../public/images/default-user-image.svg';
import { MobileMenu } from '../../components/MobileMenu';
import { ProfileTab } from '../../components/ProfileTab';
import useAuth from '../../hooks/useAuth';
import Link from 'next/link';

export function Header() {
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [showProfileTab, setShowProfileTab] = useState(false);
    const { user } = useAuth();

    useEffect(() => {

        setWindowWidth(window.innerWidth);
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth);
        })

    }, []);

    return (
        <C.Container>
            <div className="logo-nav">
                <div className="logo-container">
                    <Image src={logo} priority alt="logo" layout="fill" />
                </div>

                {
                    windowWidth >= 780 && <Nav />
                }

            </div>
            <div className="advertise-user-profile">
                <Link href="/advertise/form" passHref><C.Button>Advertise</C.Button></Link>

                {
                    windowWidth >= 780 && (
                        <C.ProfileTabContainer>
                            <div className="user-image-container" onClick={e => setShowProfileTab(v => !v)}>
                                <Image src={user.current?.photoURL ?? defaultProfileImage} layout="fill" alt="user profile image" />
                            </div>
                            <AnimatePresence>
                                {
                                    showProfileTab && (
                                        <ProfileTab
                                            initial={{ opacity: 0, x: 10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 10 }}
                                            transition={{
                                                default: { duration: .2 },
                                            }} />
                                    )
                                }
                            </AnimatePresence>

                        </C.ProfileTabContainer>
                    )
                }
                {
                    windowWidth < 780 && <MobileMenu />
                }

            </div>
        </C.Container>
    )
}
