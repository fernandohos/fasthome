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

export const FlexWrapper = styled.div`
    display: flex;
    gap: 2rem;
`;

export const Button = styled.button`
    padding: .8rem 5rem;
    background: var(--red2);
    color: var(--white);
    border: none;
    border-radius: .5rem;
    margin: auto;
    cursor: pointer;
`;