import React, { useEffect, useState } from 'react';
import * as C from './styles';
import Image from 'next/image';
import logo from '../../../public/images/Logo.svg';
import { Nav } from '../../components/Nav';
import { ButtonStyleType } from '../../types/ButtonStyleType';
import { Button } from '../../components/Button';
import defaultProfileImage from '../../../public/images/default-user-image.svg';
import { MobileMenu } from '../../components/MobileMenu';

export function Header() {
    const userImage = null;
    const [windowWidth, setWindowWidth] = useState<number>(0);

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
                        <div className="user-image-container">
                            <Image src={userImage ?? defaultProfileImage} layout="fill" alt="user profile image" />
                        </div>
                    )
                }

                {
                    windowWidth < 780 && <MobileMenu />
                }

            </div>
        </C.Container>
    )
}
