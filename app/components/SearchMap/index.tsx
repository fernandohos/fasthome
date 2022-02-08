import React from 'react';
import { Marker, Popup, TileLayer } from 'react-leaflet';
import { LatLngLiteral } from 'leaflet';
import * as C from './styles';
import { FormValuesType } from '../../types/FormValuesType';
import { divIcon } from 'leaflet';
import { HouseCard } from '../../components/HouseCard';

interface HouseType extends FormValuesType {
    id: string;
    images: string[];
}

type Props = {
    position: LatLngLiteral;
    houses: HouseType[];
}

export default function DynamicMap({ position, houses }: Props) {

    function getMapIcon(price: string | number) {
        return divIcon({
            html: `<div class="map-icon">${price.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
            })}</div>`,
            className: 'foo'
        });
    }
    return (
        <C.Map center={position} zoom={16} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                houses.map(house => {
                    return <Marker key={house.id} position={house.latlng} icon={getMapIcon(house.price)}>
                        <Popup>
                            <HouseCard {...{
                                id: house.id,
                                image: house.images[0],
                                title: house.title,
                                price: house.price,
                                address: house.address,
                                created_at: house.created_at,
                                bedrooms: house.number_of_room,
                                floor: house.floor_location,
                                square_meters: house.gross_m2,
                            }} />
                        </Popup>
                    </Marker>;
                })
            }
        </C.Map>
    )
}