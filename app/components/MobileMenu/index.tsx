import React, { useState, useEffect } from 'react';
import * as C from './styles';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';
import defaultProfileImage from '../../../public/images/default-user-image.svg';

export function MobileMenu() {
    const userImage = null;
    const [showMenu, setShowMenu] = useState(false);

    return (
        <C.Container>
            <C.Icon onClick={e => setShowMenu(v => !v)} show={showMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </C.Icon>
            <AnimatePresence>
                {
                    showMenu && (
                        <C.MobileMenu
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{
                                x: { type: "spring", stiffness: 100 },
                                default: { duration: .2 },
                            }}
                        >
                            <div className="user-image">
                                <Image src={userImage ?? defaultProfileImage} layout="fill" alt="user profile image" />
                            </div>
                            <ul>
                                <li>
                                    <Link href="/for-sale">
                                        <a>
                                            For Sale
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/for-sale">
                                        <a>
                                            For Rent
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/daily-rental">
                                        <a>
                                            Daily Rental
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/projects">
                                        <a>
                                            Projects
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </C.MobileMenu>
                    )
                }
            </AnimatePresence>

        </C.Container >
    )
}
