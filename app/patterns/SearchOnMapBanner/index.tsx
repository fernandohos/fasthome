import React from 'react';
import * as C from './styles';
import Image from 'next/image';
import { Button } from '@components/Button';
import { ButtonStyleType } from '@customTypes/ButtonStyleType';
import {useRouter} from 'next/router';

export function SearchOnMapBanner() {
    const router = useRouter();

    function goSearchOnMap() {
        router.push("/search-on-map");
    }

    return (
        <C.Container>
            <div className="content">
                <div>
                    <h3>
                        Search Your Dream House On The Map
                    </h3>
                    <p>Find the house you are looking for easily according to location information.</p>
                </div>
                <Button onClick={goSearchOnMap} buttonStyleType={ButtonStyleType.FILLED}>Search On Map</Button>
            </div>
            <div className="image-container">
                <Image src='/images/searching-on-map.png' alt="searching on map" layout="fill" />
            </div>
        </C.Container>
    )
}
