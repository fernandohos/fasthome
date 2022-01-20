import styled from 'styled-components';

export const Card = styled.a`
    padding: 1rem;
    background: var(--white);
    border: 1px solid #0003;
    width: 30rem;
    text-decoration: none;
    color: var(--black);

    .image-container {
        width: 100%;
        position: relative;
        aspect-ratio: 16/9;
    }

    .info-price {
        font-size: 2rem;
        font-weight: 500;
        margin: 1rem 0;
    }

    .info-name {
        font-size: 1.6rem;
        margin-bottom: 1rem;
    }

    .info-location {
        font-size: 1.3rem;
        color: var(--gray);
        margin-bottom: 1rem;
    }

    .info-date {
        font-size: 1.3rem;
        color: var(--gray);
        margin-bottom: 1rem;
    }
`;

export const HouseInfo = styled.div`
    display: flex;
    align-items: center;

    .info-icon {
        position: relative;
        width: 2rem;
        aspect-ratio: 1/1;
        margin: 0 .8rem 0 1.6rem;

        &:nth-child(1) {
            margin-left: 0;
        }
    }
`;