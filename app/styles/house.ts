import styled from 'styled-components';

export const Container = styled.div`
    width: 88%;
    margin: auto;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    gap: 2rem;

    @media (min-width: 1241px) {
        display: grid;
        grid-template-areas: "title nothing" "content aside";
        grid-template-columns: 82fr 18fr;
        grid-gap: 2rem;
    }
`;

export const Owner = styled.aside`
    grid-area: aside;
`;

export const Content = styled.main`
    grid-area: content;
    width: 100%;
    max-width: 80vw;

    @media (max-width: 1240px) {
        max-width: 100vw;
    }

    .explanation {
        font-size: 1.8rem;
        margin-top: 2rem;
        color: #000b;
        line-height: 2.3rem;
    }
`;

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    grid-area: title;

    h1 {
        font-size: 2.5rem;
        font-weight: 400;
    }

    h2 {
        font-size: 2.2rem;
        font-weight: 500;
    }

    .address {
        display: flex;
        align-items: center;
        margin: .6rem 0 .6rem -.3rem;
        gap: .6rem;
    }

    @media (max-width: 450px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const GenInfoGrid = styled.div`
    margin-top: 2rem;
    display: grid;
    row-gap: .5rem;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 450px) {
        grid-template-columns: repeat(2, 1fr);
    }

    p:nth-child(odd) {
        color: #000a;
    }
`;

export const TitleFeatures = styled.h4`
    font-size: 1.8rem;
    font-weight: 500;
    color: #000b;
    margin: 1rem 0;
`;

export const Features = styled.ul`
    margin-left: 2rem;
    
    li {
        position: relative;
        list-style: none;
        color: #999;

        &::after {
            content: '';
            position: absolute;
            top: 50%;
            left: -1.5rem;
            width: 1.2rem;
            height: .5rem;
            transform: translateY(-90%) translateX(-30%) rotateZ(135deg);
            border-top: 1px solid #999;
            border-right: 1px solid #999;
        }
    }
`;

export const FeaturesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

export const OwnerCard = styled.div`
    background: #fff;
    padding: 1.5rem;
    display: flex;
    border: 1px solid #0003;
    flex-direction: column;
    align-items: center;
    text-align: center;

    > div {
        width: 100%;
    }

    @media (max-width: 1240px) and (min-width: 450px) {
        flex-direction: row;
        > div {
            width: 80%;
        }
    }

    .user-image {
        border: 3px solid var(--yellow);
        width: 7rem;
        height: 7rem;
        position: relative;
        border-radius: 50%;
        overflow: hidden;
        margin: auto;
    }

    .user-image ~ p {
        margin-top: 1rem;
        font-weight: 500;
        font-size: 1.7rem;
    }
`;

export const InfoButton = styled.div<{ color?: string, border?: string, background?: string }>`
    padding: 1rem;
    display: flex;
    align-items: center;
    height: 4rem;
    gap: 1rem;
    background: ${props => props.background};
    border: 2px solid ${props => props.border};
    color: ${props => props.color};
    border-radius: .5rem;
    cursor: pointer;
    margin-top: 1rem;
    width: 100%;
    text-transform: uppercase;

    p {
        flex: 1;
        text-align: center;
    }
`;