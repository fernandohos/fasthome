import React from 'react';
import * as C from '../app/styles/app';
import { Header } from '../app/patterns/Header';
import { Banner } from '../app/patterns/Banner';
import { Featured } from '../app/patterns/Featured';
import { SearchOnMapBanner } from '../app/patterns/SearchOnMapBanner';
import { FormValuesType } from '../app/types/FormValuesType';
import Head from 'next/head';
import { supabase } from '../app/services/supabase';
import { Footer } from '../app/patterns/Footer';

interface HouseType extends FormValuesType {
  id: string;
  images: string[];
}

type Props = {
  rentalData: HouseType[];
  saleData: HouseType[];
}

function Home({ rentalData, saleData }: Props) {
  return (
    <C.Container>
      <Head>
        <title>Fasthome | Home</title>
      </Head>
      <Header />
      <Banner />
      <main>
        {saleData && <Featured {...{
          title: 'Featured Sales',
          linkTo: '/for-sale',
          data: saleData.map(saleHouse => ({
            id: saleHouse.id,
            image: saleHouse.images[0],
            title: saleHouse.title,
            price: saleHouse.price,
            address: saleHouse.address,
            created_at: saleHouse.created_at,
            bedrooms: saleHouse.number_of_room,
            floor: saleHouse.floor_location,
            square_meters: saleHouse.gross_m2
          }))
        }} />}
        <Featured {...{
          title: 'Featured Rental',
          linkTo: '/for-rental',
          data: rentalData.map(rentalHouse => ({
            id: rentalHouse.id,
            image: rentalHouse.images[0],
            title: rentalHouse.title,
            price: rentalHouse.price,
            address: rentalHouse.address,
            created_at: rentalHouse.created_at,
            bedrooms: rentalHouse.number_of_room,
            floor: rentalHouse.floor_location,
            square_meters: rentalHouse.gross_m2
          }))
        }} />
        <SearchOnMapBanner />
      </main>
      <Footer />
    </C.Container>
  )
}

export async function getServerSideProps() {
  const { data: saleData } = await supabase.from("houses")
    .select()
    .limit(4)
    .eq("sale", "forSale");

  const { data: rentalData } = await supabase.from("houses")
    .select()
    .limit(4)
    .eq("sale", "forRental");

  return { props: { saleData, rentalData } };
}

export default Home;