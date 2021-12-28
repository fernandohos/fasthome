import styled from 'styled-components';

export const Container = styled.div`
    .label {
        margin-bottom: 40px;
        background: #fff;
        height: 40px;
    }

    .leaflet-popup.leaflet-zoom-animated {
        margin-bottom: 30px;
    }

    .leaflet-container {
        width: 100%;
        height: 400px;
    }

    .leaflet-popup-content-wrapper {
        background: #dd33ff;
        color: #fff;
    }

    .leaflet-popup-content-wrapper {
        width: max-content;
    }

    .leaflet-popup-content-wrapper .leaflet-popup-content {
        width: max-content;
    }

    .leaflet-popup-content-wrapper .leaflet-popup-content img {
        color: #fff;
        max-width: 180px;

    }

    .leaflet-popup-tip-container .leaflet-popup-tip {
        background: #dd33ff;
    }

    .leaflet-popup a.leaflet-popup-close-button {
        color:#fff;
    }
`;