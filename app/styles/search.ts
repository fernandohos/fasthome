import styled from 'styled-components';

export const Container = styled.div`
    max-width: 88%;
    margin: auto;
    margin-top: 2rem;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 400;
    margin: 2rem 0;

    > span {
        font-size: 2rem;
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem;
`;

export const ResultNotFound = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    border-radius: 1rem;
    opacity: .7;

    > p {
        font-size: 2rem;
        font-weight: 500;
        margin-top: 2rem;
    }
`;

export const NoResultsImage = styled.div`
    position: relative;
    width: 14rem;
    height: 14rem;
`;