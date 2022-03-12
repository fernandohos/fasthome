import React, { ReactNode, useState } from 'react';
import * as C from './styles';
import arrowIcon from '@images/arrow.svg';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

type Props = {
    label: string;
    children: ReactNode;
}

export function Dropdown({ label, children }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <C.Container isOpen={isOpen} >
            <div className="summary" onClick={e => setIsOpen(p => !p)}>
                <p>
                    {label}
                </p>
                <div className="arrow-container">
                    <Image src={arrowIcon} alt="arrow icon" layout="fill" />
                </div>
            </div>
            <AnimatePresence>
                {
                    isOpen && (
                        <motion.div
                            className="detail"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{
                                default: { duration: .2 },
                            }}
                        >
                            {children}
                        </motion.div>
                    )
                }
            </AnimatePresence>

        </C.Container>
    )
}
