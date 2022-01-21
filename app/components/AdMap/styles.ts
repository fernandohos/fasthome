import styled from 'styled-components';
import { MapContainer } from 'react-leaflet';

export const Map = styled(MapContainer)`
    width: 100%;
    aspect-ratio: 16/9;
    margin-top: 1rem;

    @media (max-width: 450px) {
        aspect-ratio: 1/1;
    }
`;