import React, { useEffect, useState } from 'react';
import * as C from '../app/styles/forSale';
import { Header } from '../app/patterns/Header';
import { Filter } from '../app/patterns/Filter';
import { HousesGrid } from '../app/components/HousesGrid';
import { SmartSorting } from '../app/components/SmartSorting';
import { collection, getDocs, limit, query, where } from 'firebase/firestore';
import { db } from '../app/services/firebase';
import { formOptions } from '../app/utils/formOptions';
import { FormValuesType } from '../app/types/FormValuesType';

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
    const housingArray = formOptions.housing.map(option => option[1]);

    useEffect(() => {
        setHouses(data.filter(house => {
            const priceFilter = house.price >= price.min ? house.price <= (!!price.max ? price.max : Infinity) : false;
            const housingFilter = !!housing ? house.housing === housing : true;
            const sizeFilter = house.grossM2 >= size.min ? house.grossM2 <= (!!size.max ? size.max : Infinity) : false;
            const numberOfRoomFilter = !!numberOfRoom ?
                numberOfRoom === 7 ? house.numberOfRoom > 7 : 
                house.numberOfRoom === numberOfRoom : true;

            return priceFilter && housingFilter && sizeFilter && numberOfRoomFilter;
        }))
    }, [price, data, housing, size, numberOfRoom]);

    return (
        <div>
            <Header />
            <C.Container>
                <Filter
                    setHousing={setHousing}
                    setPrice={setPrice}
                    setSize={setSize}
                    setNumberOfRoom={setNumberOfRoom}
                />
                <SmartSorting resultsFound={300} title="Apartment for sale" />
                <HousesGrid houses={houses.map(house => ({
                    id: house.id,
                    image: house.images[0],
                    title: house.title,
                    price: house.price,
                    address: house.address,
                    createdAt: house.createdAt,
                    bedrooms: house.numberOfRoom,
                    floor: house.floorLocation,
                    squareMeters: house.grossM2
                })
                )} />
            </C.Container>
        </div>
    )
}

export async function getServerSideProps() {
    const ref = collection(db, "houses");
    const q = query(ref, where("sale", "==", "forSale"), limit(25));
    let data: HouseType[] = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        const docData = doc.data() as HouseType;
        docData.id = doc.id;
        data.push(docData);
    })

    return {
        props: { data }
    }
}