import React, { useState } from 'react';
import * as C from './styles';
import Image from 'next/image';
import sortingIcon from '@images/sorting-icon.svg';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
    title: string;
    resultsFound: number;
    setSortMethod: React.Dispatch<React.SetStateAction<string>>;
}

export function SmartSorting({ title, resultsFound, setSortMethod }: Props) {
    const [openSorting, setOpenSorting] = useState(false);
    const sortMethods = [
        ["Increasing Price", "increasingPrice"],
        ["Descending Price", "descendingPrice"],
        ["Most Current First", "mostCurrentFirst"],
        ["Most Oldest First", "mostOldestFirst"],
        ["By Address (A-Z)", "byAddressAZ"],
        ["By Address (Z-A)", "byAddressZA"],
    ];

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
                                {sortMethods.map(method => (
                                    <p
                                        key={method[1]}
                                        onClick={() => {
                                            setSortMethod(method[1]);
                                            setOpenSorting(p => !p);
                                        }}
                                    >
                                        {method[0]}
                                    </p>
                                ))
                                }
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </C.SortingDropdown>
        </C.Container>
    )
}
