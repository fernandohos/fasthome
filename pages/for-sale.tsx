import React from 'react';
import * as C from '../app/styles/forSale';
import { Header } from '../app/patterns/Header';
import { Filter } from '../app/patterns/Filter';
import { HousesGrid } from '../app/components/HousesGrid';
import { SmartSorting } from '../app/components/SmartSorting';

const data = [
    {
        id: '1',
        image: '/images/house.jpg',
        name: 'house',
        price: 123456,
        location: 'praça da esquina',
        createdAt: new Date().getTime(),
        bedrooms: 3,
        floor: 2,
        squareMeters: 150,
    },
    {
        id: '2',
        image: '/images/house.jpg',
        name: 'house',
        price: 123456,
        location: 'praça da esquina',
        createdAt: new Date().getTime(),
        bedrooms: 3,
        floor: 2,
        squareMeters: 150,
    },
    {
        id: '3',
        image: '/images/house.jpg',
        name: 'house',
        price: 123456,
        location: 'praça da esquina',
        createdAt: new Date().getTime(),
        bedrooms: 3,
        floor: 2,
        squareMeters: 150,
    },
    {
        id: '4',
        image: '/images/house.jpg',
        name: 'house',
        price: 123456,
        location: 'praça da esquina',
        createdAt: new Date().getTime(),
        bedrooms: 3,
        floor: 2,
        squareMeters: 150,
    },
    {
        id: '5',
        image: '/images/house.jpg',
        name: 'house',
        price: 123456,
        location: 'praça da esquina',
        createdAt: new Date().getTime(),
        bedrooms: 3,
        floor: 2,
        squareMeters: 150,
    },
    {
        id: '6',
        image: '/images/house.jpg',
        name: 'house',
        price: 123456,
        location: 'praça da esquina',
        createdAt: new Date().getTime(),
        bedrooms: 3,
        floor: 2,
        squareMeters: 150,
    },
    {
        id: '7',
        image: '/images/house.jpg',
        name: 'house',
        price: 123456,
        location: 'praça da esquina',
        createdAt: new Date().getTime(),
        bedrooms: 3,
        floor: 2,
        squareMeters: 150,
    },
]

export default function ForSale() {
    return (
        <div>
            <Header />
            <C.Container>
                <Filter />
                <SmartSorting resultsFound={300} title="Apartment for sale"/>
                <HousesGrid houses={data} />
            </C.Container>
        </div>
    )
}
