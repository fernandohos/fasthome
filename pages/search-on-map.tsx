import React, { useState, useEffect } from 'react';
import * as C from '@styles/searchOnMap';
import { Header } from '@patterns/Header';
import { Footer } from '@patterns/Footer';
import { Filter } from '@patterns/Filter';
import Head from 'next/head';
import { LatLngLiteral } from 'leaflet';
import dynamic from 'next/dynamic';
import { FormValuesType } from '@customTypes/FormValuesType';
import { supabase } from '@services/supabase';

type PositionNull = {
    lat: null;
    lng: null;
}

const DynamicMap = dynamic(
    () => import('@components/SearchMap'),
    { ssr: false }
)

interface HouseType extends FormValuesType {
    id: string;
    images: string[];
}

type Props = {
    data: HouseType[];
};

export default function SearchOnMap({ data }: Props) {
    const [position, setPosition] = useState<LatLngLiteral | PositionNull>({ lat: null, lng: null });
    const [houses, setHouses] = useState(data);
    const [housing, setHousing] = useState('');
    const [price, setPrice] = useState<{ min: number, max: number }>({ min: 0, max: 0 });
    const [size, setSize] = useState<{ min: number, max: number }>({ min: 0, max: 0 });
    const [numberOfRoom, setNumberOfRoom] = useState(0);

    // GET USER POSITION 
    useEffect(() => {
        async function getPositionFromIp(err?: { code: number, message: string }) {
            const { ip }: { ip: string } = await fetch('https://api.ipify.org/?format=json').then(r => r.json());

            const { lat, lon }: {
                lat: number,
                lon: number
            } = await fetch('http://ip-api.com/json/' + ip).then(r => r.json());
            setPosition({ lat, lng: lon });
        }

        function getPosition({ coords }: GeolocationPosition) {
            setPosition({ lat: coords.latitude, lng: coords.longitude });
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getPosition, getPositionFromIp);
        } else {
            getPositionFromIp();
        }
    }, []);

    // FILTER HOUSES
    useEffect(() => {
        setHouses(data.filter(house => {
            const priceFilter = house.price >= price.min ? house.price <= (!!price.max ? price.max : Infinity) : false;
            const housingFilter = !!housing ? house.housing === housing : true;
            const sizeFilter = house.gross_m2 >= size.min ? house.gross_m2 <= (!!size.max ? size.max : Infinity) : false;
            const numberOfRoomFilter = !!numberOfRoom ?
                numberOfRoom === 7 ? house.number_of_room > 7 :
                    house.number_of_room === numberOfRoom : true;

            return priceFilter && housingFilter && sizeFilter && numberOfRoomFilter;
        })
        )
    }, [price, data, housing, size, numberOfRoom]);

    return (
        <>
            <Header />
            <C.Container>
                <Head>
                    <title>Fasthome | Search on map</title>
                </Head>
                <Filter
                    {...{
                        setHousing,
                        setPrice,
                        setSize,
                        setNumberOfRoom
                    }}
                />
                {position.lat && <DynamicMap houses={houses} position={position} />}
            </C.Container>
            <Footer />
        </>
    )
}

export async function getServerSideProps() {
    const { data, error } = await supabase.from("houses").select();
    return {
        props: { data }
    }
}