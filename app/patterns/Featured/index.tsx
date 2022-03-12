import React, { useRef } from 'react';
import * as C from './styles';
import { CardHouseType } from '@types/CardHouseType';
import Link from 'next/link';
import { HouseCard } from '@components/HouseCard';
import useDraggableScroll from 'use-draggable-scroll';

type Props = {
    title: string;
    linkTo: string;
    data: CardHouseType[];
}

export function Featured({ title, data, linkTo }: Props) {
    const ref = useRef(null);
    const { onMouseDown } = useDraggableScroll(ref, { direction: 'horizontal' });
    return (
        <C.Container>
            <div className="title-container">
                <h2>{title}</h2>
                <Link href={linkTo}>
                    <a>
                        All
                    </a>
                </Link>
            </div>
            <div className="cards-wrapper" ref={ref} onMouseDown={onMouseDown}>
                <div className="cards-container">
                    {
                        data.map(house => {
                            return <HouseCard key={house.id} {...house} />
                        })
                    }
                </div>
            </div>
        </C.Container>
    )
}
