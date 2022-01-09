import styled from 'styled-components';

export const Container = styled.main`
    width: 86%;
    margin: auto;

    main {
        width: 80%;
        margin: auto;
        position: relative;
    }
`;

export const ContainerGroup = styled.div`
    background: var(--white);
    border: 1px solid #0003;
    padding: 1.5rem;
    text-align: left;
    margin: 3rem 0;
`;

export const Title = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    & > p {
        font-size: 2rem;
    }

    & > h1 {
        font-weight: 500;
        font-size: 2.2rem;
    }
`;

export const IconContainer = styled.div`
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
    display: inline-block;
`;

export const AddressContainer = styled.div`
    display: flex;
    margin: 2rem -.2rem;
    align-items: center;
    gap: 1rem;
`;

export const SecondTitle = styled.h2`
    font-size: 1.8rem;
    font-weight: 500;
    margin: 2rem 0;
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

export const InformationGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    & > p:nth-child(odd) {
        color: #999;
    }
`;

export const Flex = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

export const FeaturesList = styled.ul`
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

export const Button = styled.a`
    display: block;
    padding: .8rem 5rem;
    width: 20rem;
    text-decoration: none;
    background-color: var(--red2);
    color: var(--white);
    border: none;
    border-radius: .5rem;
    margin: auto;
    cursor: pointer;
`;