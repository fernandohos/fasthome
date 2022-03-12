import React, { useEffect, useState } from 'react';
import * as C from '@styles/search';
import { Header } from '@patterns/Header';
import { InputContainer } from '@patterns/Banner/styles';
import { HousesGrid } from '@components/HousesGrid';
import { supabase } from '../app/services/supabase';
import { FormValuesType } from '../app/types/FormValuesType';
import Head from 'next/head';
import { Footer } from '@patterns/Footer';
import { GetServerSideProps } from 'next';
import searchIcon from '@images/search-icon.svg';
import Image from 'next/image';

interface HouseType extends FormValuesType {
    id: string;
    images: string[];
}

type Props = {
    data: HouseType[];
    query: string;
}

export default function ForSale({ data, query }: Props) {
    const [search, setSearch] = useState(query);
    const [houses, setHouses] = useState(data);
    const [resultsTerm, setResultsTerm] = useState(query);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!search) return;
        const { data, error } = await supabase.from("houses")
            .select()
            .ilike('title', "%" + search + "%");
        setResultsTerm(search);
        data && setHouses(data);
    }

    return (
        <div>
            <Header />
            <C.Container>
                <Head>
                    <title>Fasthome | {resultsTerm}</title>
                </Head>
                <C.Title>Results for: <span>{resultsTerm}</span></C.Title>
                <C.InputWrapper>
                    <InputContainer onSubmit={onSubmit}>
                        <input placeholder="search..." type="text" value={search} onChange={e => setSearch(e.target.value)} />
                        <button type="submit" className="icon-container">
                            <div className="icon">
                                <Image src={searchIcon} alt="search icon" layout="fill" />
                            </div>
                        </button>
                    </InputContainer>
                </C.InputWrapper>
                {
                    houses.length ? (
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
                    ) :
                        <C.ResultNotFound>
                            <C.NoResultsImage>
                            <Image src={searchIcon} layout="fill" alt="no results image" />
                            </C.NoResultsImage>
                            <p>No Results Found!</p>
                        </C.ResultNotFound>
                }
            </C.Container>
            <Footer />
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async function ({ query }) {
    const { data, error } = await supabase.from("houses")
        .select()
        .ilike('title', typeof query.q === 'string' ? "%" + query.q + "%" ?? '' : '');

    return {
        props: { data, query: query.q }
    }
}