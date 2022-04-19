import React, { useState } from 'react';
import * as C from './styles';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';
import defaultProfileImage from '@images/default-user-image.svg';
import arrowIcon from '@images/arrow.svg';
import loginIcon from '@images/login-icon.svg';
import signupIcon from '@images/signup-icon.svg';
import infoIcon from '@images/info-icon.svg';
import signOut from '@images/logout-icon.svg';
import { useAuth } from '@hooks/useAuth';

export function MobileMenu() {
   const [showMenu, setShowMenu] = useState(false);
   const [showUserDetails, setShowUserDetails] = useState<boolean>(false);
   const { user, logOut } = useAuth();

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
                        default: { duration: .2 },
                     }}
                  >
                     <C.UserInfo opened={showUserDetails}>
                        <div className="user-info-summary" onClick={e => setShowUserDetails(v => !v)}>
                           <div className="user-image">
                              <Image src={user?.photo_url ?? defaultProfileImage} layout="fill" alt="user profile image" />
                           </div>
                           <div className="arrow-icon">
                              <Image src={arrowIcon} alt="arrow" layout="fill" />
                           </div>
                        </div>

                        <div className="a">
                           <AnimatePresence>
                              {
                                 showUserDetails && (
                                    <C.UserInfoDetail
                                       initial={{ maxHeight: 0 }}
                                       animate={{ maxHeight: 600 }}
                                       exit={{ maxHeight: 0 }}
                                       transition={{
                                          duration: .3,
                                          delay: 0
                                       }}
                                    >
                                       {!user && <Link href="/login" passHref>
                                          <C.UserDetailTab>
                                             <div className="detail-tab-image">
                                                <Image src={loginIcon} layout="fill" alt="login icon" />
                                             </div>
                                             Login
                                          </C.UserDetailTab>
                                       </Link>}
                                       {!user && <Link href="/signup" passHref>
                                          <C.UserDetailTab>
                                             <div className="detail-tab-image">
                                                <Image src={signupIcon} layout="fill" alt="login icon" />
                                             </div>
                                             Signup
                                          </C.UserDetailTab>
                                       </Link>}
                                       {user && <Link href="/profile-information" passHref>
                                          <C.UserDetailTab>
                                             <div className="detail-tab-image">
                                                <Image src={infoIcon} layout="fill" alt="login icon" />
                                             </div>
                                             Profile information
                                          </C.UserDetailTab>
                                       </Link>}
                                       {user && <C.UserDetailTab onClick={logOut}>
                                          <div className="detail-tab-image">
                                             <Image src={signOut} layout="fill" alt="login icon" />
                                          </div>
                                          Sign out
                                       </C.UserDetailTab>}
                                    </C.UserInfoDetail>
                                 )
                              }
                           </AnimatePresence>
                        </div>
                     </C.UserInfo>

                     <ul>
                        <li>
                           <Link href="/for-sale">
                              <a>
                                 For Sale
                              </a>
                           </Link>
                        </li>
                        <li>
                           <Link href="/for-rental">
                              <a>
                                 For Rent
                              </a>
                           </Link>
                        </li>
                        <li>
                           <Link href="/search-on-map">
                              <a>
                                 Search on Map
                              </a>
                           </Link>
                        </li>
                        {/* <li>
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
                        </li> */}
                     </ul>
                  </C.MobileMenu>
               )
            }
         </AnimatePresence>

      </C.Container >
   )
}
