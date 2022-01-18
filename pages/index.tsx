import React from 'react';
import * as C from '../app/styles/app';
import type { NextPage } from 'next';
import { Header } from '../app/patterns/Header';
import { Banner } from '../app/patterns/Banner';
import { Featured } from '../app/patterns/Featured';
import { SearchOnMapBanner } from '../app/patterns/SearchOnMapBanner';
import { FormValuesType } from '../app/types/FormValuesType';
import { collection, getDocs, limit, query, where } from 'firebase/firestore';
import { db } from '../app/services/firebase';

interface HouseType extends FormValuesType {
  id: string;
  images: string[];
}

type Props = {
  rentalData: HouseType[];
  saleData: HouseType[];
}

export default function Home({ rentalData, saleData }: Props) {
  return (
    <C.Container>
      <Header />
      <Banner />
      <main>
        <Featured {...{
          title: 'Featured Sales',
          linkTo: '/for-sale',
          data: saleData.map(saleHouse => ({
            id: saleHouse.id,
            image: saleHouse.images[0],
            title: saleHouse.title,
            price: saleHouse.price,
            address: saleHouse.address,
            createdAt: saleHouse.createdAt,
            bedrooms: saleHouse.numberOfRoom,
            floor: saleHouse.floorLocation,
            squareMeters: saleHouse.grossM2
          }))
        }} />
        <Featured {...{
          title: 'Featured Rental',
          linkTo: '/for-rental',
          data: rentalData.map(rentalHouse => ({
            id: rentalHouse.id,
            image: rentalHouse.images[0],
            title: rentalHouse.title,
            price: rentalHouse.price,
            address: rentalHouse.address,
            createdAt: rentalHouse.createdAt,
            bedrooms: rentalHouse.numberOfRoom,
            floor: rentalHouse.floorLocation,
            squareMeters: rentalHouse.grossM2
          }))
        }} />
        <SearchOnMapBanner />
      </main>
    </C.Container>
  )
}

export async function getServerSideProps() {
  const ref = collection(db, "houses");
  const saleQuery = query(ref, where("sale", "==", "forSale"), limit(4));
  const rentalQuery = query(ref, where("sale", "==", "forRental"), limit(4));
  const saleSnapshot = await getDocs(saleQuery);
  const rentalSnapshot = await getDocs(rentalQuery);

  const saleData: HouseType[] = [];
  const rentalData: HouseType[] = [];

  saleSnapshot.forEach((doc) => {
    const docData = doc.data() as HouseType;
    docData.id = doc.id;
    saleData.push(docData);
  })

  rentalSnapshot.forEach((doc) => {
    const docData = doc.data() as HouseType;
    docData.id = doc.id;
    rentalData.push(docData);
  })

  return {
    props: { saleData, rentalData }
  }
}