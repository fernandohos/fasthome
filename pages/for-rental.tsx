import React from 'react';
import * as C from '../app/styles/forRental';
import { Header } from '../app/patterns/Header';
import { SmartSorting } from '../app/components/SmartSorting';
import { HousesGrid } from '../app/components/HousesGrid';
import { Filter } from '../app/patterns/Filter';

const data = [
    {
        id: '1',
        image: '/images/house.jpg',
        name: 'house',
        price: 3456,
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
        price: 1236,
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
        price: 1456,
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
        price: 2456,
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
        price: 3456,
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
        price: 1236,
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
        price: 1236,
        location: 'praça da esquina',
        createdAt: new Date().getTime(),
        bedrooms: 3,
        floor: 2,
        squareMeters: 150,
    },
]

export default function forRental() {
    return (
        <C.Container>
            <Header />
            <div>
                <Filter />
                <SmartSorting title="Apartment for rental" resultsFound={2000} />
                <HousesGrid houses={data}/>
            </div>
        </C.Container>
    )
}
