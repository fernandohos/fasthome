import React, { useEffect, useState } from 'react';
import * as C from '@styles/forSale';
import { Header } from '@patterns/Header';
import { Filter } from '@patterns/Filter';
import { HousesGrid } from '@components/HousesGrid';
import { SmartSorting } from '@components/SmartSorting';
import { supabase } from '@services/supabase';
import { FormValuesType } from '@types/FormValuesType';
import Head from 'next/head';
import { Footer } from '@patterns/Footer';

interface HouseType extends FormValuesType {
    id: string;
    images: string[];
}

type Props = {
    data: HouseType[];
}

export default function ForSale({ data }: Props) {
    const [housing, setHousing] = useState('');
    const [price, setPrice] = useState({ min: 0, max: 0 });
    const [size, setSize] = useState({ min: 0, max: 0 });
    const [houses, setHouses] = useState<HouseType[]>(data);
    const [numberOfRoom, setNumberOfRoom] = useState(0);
    const [sortMethod, setSortMethod] = useState('mostCurrentFirst');

    useEffect(() => {
        setHouses(data.filter(house => {
            const priceFilter = house.price >= price.min ? house.price <= (!!price.max ? price.max : Infinity) : false;
            const housingFilter = !!housing ? house.housing === housing : true;
            const sizeFilter = house.gross_m2 >= size.min ? house.gross_m2 <= (!!size.max ? size.max : Infinity) : false;
            const numberOfRoomFilter = !!numberOfRoom ?
                numberOfRoom === 7 ? house.number_of_room > 7 :
                    house.number_of_room === numberOfRoom : true;

            return priceFilter && housingFilter && sizeFilter && numberOfRoomFilter;
        }).sort((a, b) => {
            switch (sortMethod) {
                case "descendingPrice":
                    return b.price - a.price;
                case "increasingPrice":
                    return a.price - b.price;
                case "mostCurrentFirst":
                    return b.created_at - a.created_at;
                case "mostOldestFirst":
                    return a.created_at - b.created_at;
                case "byAddressAZ":
                    if (a.address[0] === b.address[0]) return 0;
                    return a.address[0] > b.address[0] ? 1 : -1;
                case "byAddressZA":
                    if (a.address[0] === b.address[0]) return 0;
                    return a.address[0] < b.address[0] ? 1 : -1;
                default:
                    return 0;
            }
        })
        )
    }, [price, data, housing, size, numberOfRoom, sortMethod]);

    return (
        <div>
            <Header />
            <C.Container>
                <Head>
                    <title>Fasthome | For sale houses</title>
                </Head>
                <Filter
                    {...{
                        setHousing,
                        setPrice,
                        setSize,
                        setNumberOfRoom
                    }}
                />
                <SmartSorting
                    setSortMethod={setSortMethod}
                    resultsFound={houses.length}
                    title="Apartment for sale"
                />
                <HousesGrid houses={houses.map(house => ({
                    id: house.id,
                    image: house.images[0],
                    title: house.title,
                    price: house.price,
                    address: house.address,
                    created_at: house.created_at,
                    bedrooms: house.number_of_room,
                    floor: house.floor_location,
                    square_meters: house.gross_m2
                })
                )} />
            </C.Container>
            <Footer />
        </div>
    )
}

export async function getServerSideProps() {
    const { data, error } = await supabase.from("houses")
        .select()
        .eq("sale", "forSale");

    return {
        props: { data }
    }
}