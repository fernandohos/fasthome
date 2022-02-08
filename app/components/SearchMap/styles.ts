import styled from 'styled-components';
import { MapContainer } from 'react-leaflet';

export const Map = styled(MapContainer)`
    width: 100%;
    aspect-ratio: 16/9;
    margin-top: 2rem;
    position: relative;
    z-index: 2;

    .request-popup {
        background: none;
    }
    .leaflet-popup-content, .leaflet-popup-content-wrapper {
        background: none;
        padding: 0;
        margin: 0;
    }

    a.leaflet-popup-close-button {
        padding: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: -1rem -1rem 0 0;
        box-shadow: -3px 3px 4px #4443;
        border-radius: 50%;
        background: var(--white);
        color: var(--red2);
    }

    .map-icon {
        display: block;
        background: var(--red2);
        width: max-content;
        position: relative;
        padding: .3rem .8rem;
        color: var(--white);
        border-radius: .3rem;
        transform: translateX(-45%) translateY(-95%);
        
        &::after {
            content: '';
            background: var(--red2);
            position: absolute;
            border-radius: .3rem;
            width: 1.4rem;
            height: 1.4rem;
            bottom: -.7rem;
            left: 0; 
            right: 0; 
            margin: auto;
            transform: rotateZ(45deg);
        }
    }

    @media (max-width: 450px) {
        aspect-ratio: 1/1;
    }
`;