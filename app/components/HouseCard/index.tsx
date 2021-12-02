import React from 'react';
import * as C from './styles';

import { CardHouseType } from '../../types/CardHouseType';

import Image from 'next/image';
import Link from 'next/link';

import bedroomsIcon from '../../../public/images/bedrooms-icon.svg';
import stairsIcon from '../../../public/images/stairs-icon.svg';
import squareMetersIcon from '../../../public/images/square-meters.svg';

export function HouseCard(house: CardHouseType) {
    return (
        <Link href={`/house/${house.id}`} passHref>
            <C.Card >
                <div className="image-container">
                    <Image src={house.image} alt={house.name} layout="fill" />
                </div>
                <div className="card-info">
                    <p className="info-price">{
                        house.price.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                        })
                    }</p>
                    <p className="info-name">{house.name}</p>
                    <p className="info-location">{house.location}</p>
                    <p className="info-date">{new Date(house.createdAt).toLocaleDateString('en-US', {
                        month: 'long', day: 'numeric', year: 'numeric'
                    })}</p>
                    <C.HouseInfo>
                        <div className="info-icon">
                            <Image src={bedroomsIcon} alt="bedrooms icon" layout="fill" />
                        </div>
                        <p>{house.bedrooms}</p>
                        <div className="info-icon">
                            <Image src={stairsIcon} alt="stairs icon" layout="fill" />
                        </div>
                        <p>{house.floor}</p>
                        <div className="info-icon">
                            <Image src={squareMetersIcon} alt="square meters icon" layout="fill" />
                        </div>
                        <p>{house.squareMeters}m²</p>
                    </C.HouseInfo>
                </div>
            </C.Card>
        </Link>
    )
}
