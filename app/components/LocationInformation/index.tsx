import React, { useState, useCallback } from 'react';
import { Fieldset } from '../Fieldset';
import * as C from './styles';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { LatLngExpression, LatLng, LatLngLiteral } from 'leaflet';
import { FormikInput } from '../FormikInput';
import {Field, FieldProps} from 'formik';

// get ip
//https://api.ipify.org/?format=json

// get data
//http://ip-api.com/json/24.48.0.1

export default function Fied() {
    return (
        <Field 
            component={LocationInformation}
        />
    )
}

type PositionNull = {
    lat: null;
    lng: null;
}

let loop = 0;

export function LocationInformation({form, ...props}: FieldProps) {
    const [position, setPosition] = useState<LatLngLiteral | PositionNull>({lat: null, lng: null});
    const [markerPosition, setMarkerPosition] = useState<LatLngLiteral | PositionNull>({lat: null, lng: null});

    const {setFieldValue} = form;

    function HandleClick() {
        const map = useMapEvents({
            click(e) {
                setMarkerPosition(e.latlng);
            },
        })
    
        return markerPosition.lat === null || markerPosition.lng === null ? null : (
            <Marker position={markerPosition} />
        )
    }

    React.useEffect(() => {
        async function getPositionFromIp(err?: {code: number, message: string}) {
            const { ip }: { ip: string } = await fetch('https://api.ipify.org/?format=json').then(r => r.json());

            const {lat, lon}: {
                lat: number,
                lon: number
            } = await fetch('http://ip-api.com/json/' + ip).then(r => r.json());

            setPosition(new LatLng(lat, lon));
        }

        function getPosition({coords}: GeolocationPosition) {
            setPosition(new LatLng(coords.latitude, coords.longitude));
        }

        if (navigator.geolocation && position.lat === null) {
            navigator.geolocation.getCurrentPosition(getPosition, getPositionFromIp);
        }
        if(!navigator.geolocation && position.lat === null) {
            getPositionFromIp();
        }
    }, [position]);

    React.useEffect(() => {
        if(markerPosition.lng !== null && markerPosition.lat !== null) {
            fetch(`http://api.positionstack.com/v1/reverse?access_key=${process.env.NEXT_PUBLIC_ADDRESS_API_KEY}&query=${markerPosition.lat},${markerPosition.lng}`).then(r => r.json())
            .then(({data}) => data && data[0].label).then(address => {
                setFieldValue("address", address);
            });
        }
            
    }, [markerPosition, setFieldValue]);

    return (
        <Fieldset title="Location Information">
            <FormikInput
                label='Address'
                name='address'
                type='text'
            />
            <C.Container>
                {
                    position.lat !== null || position.lng !== null ? (
                        <MapContainer center={position} zoom={16} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <HandleClick />
                        </MapContainer>
                    ) : null
                }
            </C.Container>
        </Fieldset>
    )
}
