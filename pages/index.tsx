import React from 'react';
import type { NextPage } from 'next';
import { Header } from '../app/patterns/Header';
import { Banner } from '../app/patterns/Banner';
import { Featured } from '../app/patterns/Featured';
import * as C from '../app/styles/app';

const Home: NextPage = () => {
  const featuredSales = {
    title: 'Featured Sales',
    linkTo: '/for-sale',
    data: [
      {
        id: '123',
        image: '/images/house.jpg',
        name: 'apartment for sale',
        price: 290000,
        location: 'São Paulo - SP',
        createdAt: 1638401015738,
        bedrooms: 2,
        floor: 4,
        squareMeters: 140
      },
      {
        id: '1213',
        image: '/images/house.jpg',
        name: 'apartment for sale',
        price: 330000,
        location: 'São Paulo - SP',
        createdAt: 1638401015738,
        bedrooms: 2,
        floor: 4,
        squareMeters: 140
      },
      {
        id: '1234',
        image: '/images/house.jpg',
        name: 'apartment for sale',
        price: 290000,
        location: 'São Paulo - SP',
        createdAt: 1638401015738,
        bedrooms: 2,
        floor: 4,
        squareMeters: 140
      },
      {
        id: '532',
        image: '/images/house.jpg',
        name: 'casinha',
        price: 250000,
        location: 'Rio de Janeiro - RJ',
        createdAt: 1638401015738,
        bedrooms: 2,
        floor: 7,
        squareMeters: 120,
      }
    ]
  }

  return (
    <C.Container>
      <Header />
      <Banner />
      <main>
        <Featured {...featuredSales} />
      </main>
    </C.Container>
  )
}

export default Home
