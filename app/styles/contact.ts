import styled from 'styled-components';

export const Container = styled.main`
    width: 86%;
    margin: auto;
`;

export const InputContainer = styled.div<{ width?: number | string }>`
    width: ${props => props.width ?? '25rem'};

    @media (max-width: 620px) {
        width: 100%;
    }
`;

export const FlexInput = styled.div`
    display: flex;
    gap: 2rem;
    max-width: 100%;

    @media (max-width: 430px) {
        flex-direction: column;
        gap: 0;
    }
`;

export const Button = styled.button`
    display: block;
    padding: .8rem 7rem;
    text-decoration: none;
    background-color: var(--red2);
    color: var(--white);
    border: none;
    border-radius: .5rem;
    margin: auto;
    cursor: pointer;
`;