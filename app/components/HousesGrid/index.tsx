import React from 'react';
import * as C from './styles';
import { CardHouseType } from '@customTypes/CardHouseType';
import { HouseCard } from '../HouseCard';

type Props = {
    houses: CardHouseType[];
}

export function HousesGrid({ houses }: Props) {
    return (
        <C.Container>
            {
                houses.map(house => (
                    <HouseCard key={house.id} {...house}/>
                ))
            }
        </C.Container>
    )
}
