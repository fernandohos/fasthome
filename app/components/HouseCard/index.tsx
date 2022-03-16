import React from 'react';
import * as C from './styles';

import { CardHouseType } from '@customTypes/CardHouseType';

import Image from 'next/image';
import Link from 'next/link';

import bedroomsIcon from '@images/bedrooms-icon.svg';
import stairsIcon from '@images/stairs-icon.svg';
import defaultHouseImage from '@images/default-house-image.svg';
import squareMetersIcon from '@images/square-meters.svg';

export function HouseCard(house: CardHouseType) {
    return (
        <Link href={`/house/${house.id}`} passHref>
            <C.Card >
                <div className="image-container">
                    <Image src={house.image ?? defaultHouseImage} alt={house.title} layout="fill" />
                </div>
                <div className="card-info">
                    <p className="info-price">{
                        house.price.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                        })
                    }</p>
                    <p className="info-name">{house.title}</p>
                    <p className="info-location">{house.address}</p>
                    <p className="info-date">{new Date(house.created_at).toLocaleDateString('en-US', {
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
                        <p>{house.square_meters}m²</p>
                    </C.HouseInfo>
                </div>
            </C.Card>
        </Link>
    )
}
