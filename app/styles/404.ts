import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;

    > p {
        font-size: 3rem;
    }
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 7rem;
    font-weight: 400;
    margin-top: -5rem;
`;

export const Logo = styled.div`
    position: absolute;
    right: 2rem;
    width: 18rem;
    height: 10rem;
    bottom: 2rem;
`;

export const Separator = styled.div`
    width: 20.1rem;
    height: 1rem;
    margin: 1rem;
    background: #8DD69C;
`;