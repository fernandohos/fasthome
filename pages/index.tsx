import React from 'react';
import * as C from '@styles/app';
import { Header } from '@patterns/Header';
import { Banner } from '@patterns/Banner';
import { Featured } from '@patterns/Featured';
import { SearchOnMapBanner } from '@patterns/SearchOnMapBanner';
import { FormValuesType } from '@customTypes/FormValuesType';
import Head from 'next/head';
import { supabase } from '@services/supabase';
import { Footer } from '@patterns/Footer';
import { useRouter } from 'next/router';

interface HouseType extends FormValuesType {
  id: string;
  images: string[];
}

type Props = {
  rentalData: HouseType[];
  saleData: HouseType[];
}

function Home({ rentalData, saleData }: Props) {
  const router = useRouter();

  React.useEffect(() => {
    if (router.asPath.includes('access_token') && router.asPath.includes('type=recovery')) {
      router.push('new-password#' + router.asPath.split('#')[1]);
    }
  }, [router]);

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