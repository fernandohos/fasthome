import React, { useEffect, useState } from 'react';
import * as C from './styles';
import Image from 'next/image';
import logo from '../../../public/images/Logo.svg';
import { Nav } from '../../components/Nav';
import { ButtonStyleType } from '../../types/ButtonStyleType';
import { Button } from '../../components/Button';
import { AnimatePresence } from 'framer-motion';
import defaultProfileImage from '../../../public/images/default-user-image.svg';
import { MobileMenu } from '../../components/MobileMenu';
import { ProfileTab } from '../../components/ProfileTab';

export function Header() {
    const userImage = null;
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [showProfileTab, setShowProfileTab] = useState(false);

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
                    <Image src={logo} alt="logo" layout="fill" />
                </div>

                {
                    windowWidth >= 780 && <Nav />
                }

            </div>
            <div className="advertise-user-profile">
                <Button buttonStyleType={ButtonStyleType.FILLED}>Advertise</Button>

                {
                    windowWidth >= 780 && (
                        <C.ProfileTabContainer>
                            <div className="user-image-container" onClick={e => setShowProfileTab(v => !v)}>
                                <Image src={userImage ?? defaultProfileImage} layout="fill" alt="user profile image" />
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
