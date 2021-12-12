import React, { useState } from 'react';
import * as C from './styles';
import Image from 'next/image';
import sortingIcon from '../../../public/images/sorting-icon.svg';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
    title: string;
    resultsFound: number
}

export function SmartSorting({ title, resultsFound }: Props) {
    const [openSorting, setOpenSorting] = useState(false);
    return (
        <C.Container>
            <h1>{title}</h1>
            <p>&#40;{resultsFound}&#41; results found.</p>
            <C.SortingDropdown>
                <div className="summary" onClick={e => setOpenSorting(p => !p)}>
                    <p>Smart Sorting</p>
                    <div className="sorting-icon">
                        <Image src={sortingIcon} layout="fill" alt="sorting icon" />
                    </div>
                </div>
                <AnimatePresence>
                    {
                        openSorting && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{
                                    default: { duration: .2 },
                                }}
                                className="detail"
                            >
                                <p>Increasing Price</p>
                                <p>Descending Price</p>
                                <p>Most Current First</p>
                                <p>Most Oldest First</p>
                                <p>By Address &#40;A-Z&#41;</p>
                                <p>By Address &#40;Z-A&#41;</p>
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </C.SortingDropdown>
        </C.Container>
    )
}
