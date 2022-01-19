import React from 'react';
import { Marker, TileLayer } from 'react-leaflet';
import { LatLngLiteral } from 'leaflet';
import * as C from './styles';

type Props = {
    position: LatLngLiteral;
}

export default function DynamicMap({ position }: Props) {
    return (
        <C.Map center={position} zoom={16} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} />
        </C.Map>
    )
}