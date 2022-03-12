import React, { useState } from 'react';
import { Fieldset } from '@components/Fieldset';
import * as C from './styles';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { LatLng, LatLngLiteral } from 'leaflet';
import { FormikInput } from '@components/FormikInput';
import { Field, FieldProps } from 'formik';

// get ip
//https://api.ipify.org/?format=json

// get data
//http://ip-api.com/json/24.48.0.1

function FieldLocationInformation() {
    return (
        <Field
            component={React.memo(LocationInformation)}
        />
    )
}

export default React.memo(FieldLocationInformation);

type PositionNull = {
    lat: null;
    lng: null;
}

function LocationInformation({ form, ...props }: FieldProps) {
    const [position, setPosition] = useState<LatLngLiteral | PositionNull>({ lat: null, lng: null });
    const [markerPosition, setMarkerPosition] = useState<LatLngLiteral | PositionNull>({ lat: null, lng: null });

    const { setFieldValue } = form;

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
        async function getPositionFromIp(err?: { code: number, message: string }) {
            const { ip }: { ip: string } = await fetch('https://api.ipify.org/?format=json').then(r => r.json());

            const { lat, lon }: {
                lat: number,
                lon: number
            } = await fetch('http://ip-api.com/json/' + ip).then(r => r.json());

            setPosition(new LatLng(lat, lon));
        }

        function getPosition({ coords }: GeolocationPosition) {
            setPosition(new LatLng(coords.latitude, coords.longitude));
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getPosition, getPositionFromIp);
        }
        if (!navigator.geolocation) {
            getPositionFromIp();
        }
    }, []);

    React.useEffect(() => {
        if (markerPosition.lng !== null && markerPosition.lat !== null) {
            fetch(`http://www.mapquestapi.com/geocoding/v1/reverse?key=${process.env.NEXT_PUBLIC_MAPQUEST_KEY}&location=${markerPosition.lat},${markerPosition.lng}`).then(r => r.json())
                .then((a) => { console.log(a); return a })
                .then(({ results }) => results[0].locations[0])
                .then(location => {
                    if (location) {
                        setFieldValue("address", `${location.street}, ${location.adminArea5}${location.adminArea1 && `, ${location.adminArea1}`}`);
                        setFieldValue("latlng", markerPosition);
                    }
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
